import oficinamodel from "../models/workshopmodel.js";

export async function store (req, res) {
    try {
        const oficina = await oficinamodel.create(req.body)
        res.status(200).json(oficina)
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function index (req, res) {
    try {
        const oficina = await oficinamodel.find() .exec()
        res.status(200).json({mensagem: "Listado com sucesso"})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
    
}
export async function update(req, res) {
    try {
        const oficina = await oficinamodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "Atualizado com sucesso"})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}
export async function destroy(req, res) {
    try {
        const oficina = await oficinamodel.findByIdAndDelete(req.params.id, req.body) .exec()
        res.status(200).json({mensagem: "deletado com sucesso", oficina})
    } catch (error) {
        res.status(400).json({mensagem: error.mensagem})
        
    }
}