const express = require("express");
const router = express.Router();

let jornadaTrabalho = {
  segunda: {
    inicio: "08:00",
    fim: "17:00",
  },
  terca: {
    inicio: "08:00",
    fim: "17:00",
  },
  quarta: {
    inicio: "08:00",
    fim: "17:00",
  },
  quinta: {
    inicio: "08:00",
    fim: "17:00",
  },
  sexta: {
    inicio: "08:00",
    fim: "17:00",
  },
  sabado: {
    inicio: "08:00",
    fim: "12:00",
  },
  domingo: {},
};

router.get("/", (req, res) => {
  res.json(jornadaTrabalho);
});

router.put("/:dia", (req, res) => {
  const dia = req.params.dia;
  const novoHorario = req.body;

  jornadaTrabalho[dia] = novoHorario;

  res.json(jornadaTrabalho[dia]);
});

module.exports = router;
