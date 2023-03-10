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

let jornadaInfo = {
  active: true,
  action: "Abortar",
};

router.get("/", (req, res) => {
  res.json({ jornadaTrabalho, jornadaInfo });
});

router.put("/", (req, res) => {
  const { novaJornada, novaJornadaInfo } = req.body;

  novaJornada.map((item) => {
    jornadaTrabalho[item.dia] = item.novoHorario;
  });

  jornadaInfo = novaJornadaInfo;

  res.json({ jornadaTrabalho, jornadaInfo });
});

module.exports = router;
