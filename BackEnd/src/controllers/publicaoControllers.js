// import { request, response } from "express";
// import Usuario from "../models/publicacaoModel.js";

// export const create = async(request, response) => {
//     const {titulo,local, cidade, imagem} = request.body

//     try{
//         await Usuario.create({titulo,local, cidade, imagem})
//         response.status(201).json("CRIADO")
//     }catch(error){
//         response.status(500).json({err: error})
//     };
// }