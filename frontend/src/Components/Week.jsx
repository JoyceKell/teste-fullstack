import React from "react";
import { ToggleButton, ToggleButtonGroup, TextField, Box } from "@mui/material";

import "../App.css";

const daysOfWeek = [
  { label: "D", value: "domingo" },
  { label: "S", value: "segunda" },
  { label: "T", value: "terca" },
  { label: "Q", value: "quarta" },
  { label: "Q", value: "quinta" },
  { label: "S", value: "sexta" },
  { label: "S", value: "sábado" },
];

const defaultTimeValues = { entrada: "", saida: "" };

export default function Week({ selectedDays, setSelectedDays }) {
  const handleDaySelect = (event, newDays) => {
    const newSelectedDays = { ...selectedDays };
    newDays.forEach((day) => {
      if (!selectedDays[day]) {
        newSelectedDays[day] = { ...defaultTimeValues };
      }
    });
    Object.keys(selectedDays).forEach((day) => {
      if (!newDays.includes(day)) {
        delete newSelectedDays[day];
      }
    });
    setSelectedDays(newSelectedDays);
  };

  const handleTimeChange = (event, dayValue, timeType) => {
    setSelectedDays({
      ...selectedDays,
      [dayValue]: {
        ...selectedDays[dayValue],
        [timeType]: event.target.value,
      },
    });
    console.log("Novo : ", selectedDays);
  };

  const renderInputs = (dayValue) => {
    const dayTimes = selectedDays[dayValue];
    if (!dayTimes) {
      return null;
    }
    return (
      <>
        <Box
          sx={{
            display: "flex",
            margin: "3vh",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "4vh" }}>{dayValue}</span>
          <div>
            <TextField
              size="small"
              label="Entrada"
              type="time"
              className="wider-input"
              value={dayTimes.entrada}
              InputLabelProps={{
                shrink: true,
                position: "top",
              }}
              onChange={(event) => handleTimeChange(event, dayValue, "entrada")}
            />
          </div>
          <span style={{ margin: "0 4vh 0 4vh" }}>Até</span>
          <div>
            <TextField
              size="small"
              label="Saída"
              type="time"
              className="wider-input"
              InputLabelProps={{
                shrink: true,
                position: "top",
              }}
              value={dayTimes.saida}
              onChange={(event) => handleTimeChange(event, dayValue, "saida")}
            />
          </div>
        </Box>
      </>
    );
  };

  return (
    <>
      <ToggleButtonGroup
        value={Object.keys(selectedDays).filter((day) => selectedDays[day])}
        onChange={handleDaySelect}
      >
        {daysOfWeek.map((day, index) => (
          <ToggleButton key={`${day.value}-${index}`} value={day.value}>
            {day.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {Object.keys(selectedDays).map((dayValue) => (
        <div key={dayValue}>{renderInputs(dayValue)}</div>
      ))}
    </>
  );
}
