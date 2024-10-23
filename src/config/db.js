import mongoose from "mongoose"


const conexão = async () =>{
    mongoose
    .connect(`${process.env.URI}`)
    .then(() => console.log("Conexão com o mongo realizada com sucesso"))
    .catch((error) =>  console.error("Erro ao realizar conexão", error))
}

export default conexão