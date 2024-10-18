import express from "express";
import cors from "cors";

import conn from "./config/conn.js";

//MODELOS
import Empresa from "./models/empresaModel.js";
import Usuario from "./models/usuarioModel.js";
import Publicacao from "./models/publicacaoModel.js";
import Curtida from "./models/curtidaModel.js";
import Comentario from "./models/comentarioModels.js"

//ROTAS:
import empresaRouter from "./routes/empresaRoutes.js"
import usuarioRouter from "./routes/usuarioRoutes.js"
import publicacaoRouter from "./routes/publicacaoRoutes.js"


const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

conn
  .sync()
  .then()
  .catch((err) => console.error(err));

//Utilizar rotas
app.use("/api/empresas",empresaRouter)
app.use("/api/usuarios", usuarioRouter)
app.use("/api/publicacoes", publicacaoRouter)

app.use((req, res) => {
  res.status(404).json({ err: "Rota não encontrada" });
});

export default app;