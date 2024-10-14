import express from "express"
import conexao from "./config/db.js"
import  workshop from "./routers/workshoprouter.js"
import vehicle from "./routers/vehiclerouter.js"
import maintenance from "./routers/maintenancerouter.js"

const app = express()
app.use(express.json())

conexao()

app.use("/workshop" ,workshop)
app.use("/vehicle", vehicle)
app.use("/maintenance", maintenance)
app.listen(3000,() => console.log("servidor rodando aqui", 3000))