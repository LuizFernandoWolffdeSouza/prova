import mongoose from "mongoose"


const conexão = () =>{
    mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}${process.env.DB_PASSWORD}> ${process.env.CLUSTER_ADDRESS}@${process.env.DB_NAME}`)
    .then(() => console.log("Conexão com o mongo realizada com sucesso"))
    .catch((error) =>  console.error("Erro ao realizar conexão", error))
}

export default conexão