import React, { useState } from "react";
import Week from "../Components/Week";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import api from "../service/api";
import Box from "@mui/material/Box";

import "../App.css";

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDays, setSelectedDays] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  async function handleSubmit() {
    let novaJornada = [];
    for (let days in selectedDays) {
      console.log(selectedDays[days]);
      novaJornada.push({
        dia: days,
        novoHorario: {
          inicio: selectedDays[days].entrada,
          fim: selectedDays[days].saida,
        },
      });
    }
    const novaJornadaInfo = {
      active: isChecked,
      action: selectedOption,
    };
    const a = await api.put("/", { novaJornada, novaJornadaInfo });
    console.log(a);
  }

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <span>Configuração Jornada de Trabalho</span>
          <div>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />{" "}
            <span>Ativar horário de trabalho</span>
          </div>
        </div>
        <Week selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Selecione uma opção:
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedOption}
              label="Selecione uma opção:"
              onChange={handleOptionChange}
              style={{ width: 300, height: 50 }}
            >
              <MenuItem value="">
                <em>Selecione...</em>
              </MenuItem>
              <MenuItem value="abortar">Abortar</MenuItem>
              <MenuItem value="enviar">Enviar no próximo expediente</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
          </FormControl>

          <Button
            disabled={
              !isChecked ||
              selectedOption === "" ||
              Object.keys(selectedDays).length === 0
            }
            variant="outlined"
            onClick={handleSubmit}
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
