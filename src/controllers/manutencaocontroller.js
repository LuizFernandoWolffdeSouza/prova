import maintenancemodel from "../models/maintenancemodel.js"

export async function store (req, res) {
    try {
        const manutencao= await maintenancemodel.create(req.body)
        res.status(200).json(manutencao)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function index (req, res) {
    try {
        const manutencao = await maintenancemodel.find() .exec()
        res.status(200).json({mensagem: "Listado com sucesso"
            
        })
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function update(req, res) {
    try {
        const manutencao = await maintenancemodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "Atualizado com sucesso", manutencao})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}
export async function destroy(req, res) {
    try {
        const manutencao = await  maintenancemodel.findByIdAndDelete(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "deletado com sucesso", manutencao})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}