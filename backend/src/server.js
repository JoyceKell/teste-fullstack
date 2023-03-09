const express = require("express");
const bodyParser = require("body-parser");
const jornadaController = require("./controllers/jornadaController");

const app = express();
app.use(bodyParser.json());

app.use("/jornada", jornadaController);

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
