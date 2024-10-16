import vehiclemodel from "../models/vehiclemodel.js"

export async function store (req, res) {
    try {
        const veiculo= await vehiclemodel.create(req.body)
        res.status(200).json(veiculo)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function index (req, res) {
    try {
        const veiculo = await vehiclemodel.find() .exec()
        res.status(200).json({mensagem: "Listado com sucesso", veiculo})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function update(req, res) {
    try {
        const veiculo = await vehiclemodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "Atualizado com sucesso", veiculo})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}
export async function destroy(req, res) {
    try {
        const veiculo = await  vehiclemodel.findByIdAndDelete(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "deletado com sucesso", veiculo})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}