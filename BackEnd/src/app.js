import express from "express";
import cors from "cors";

import conn from "./config/conn.js";

import Empresa from "./models/empresaModel.js";
import Usuario from "./models/usuarioModel.js";
import Publicacao from "./models/publicacaoModel.js";

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

conn
  .sync()
  .then()
  .catch((err) => console.error(err));

app.use((req, res) => {
  res.status(404).json({ err: "Rota não encontrada" });
});

export default app;