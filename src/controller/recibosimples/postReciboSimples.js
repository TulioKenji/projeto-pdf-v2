import CreateReciboSimples from "../../model/recibo/reciboSimplesModel.js";

const postReciboSimples = (req, res)=>{ 
    CreateReciboSimples(req.body);
    return res.status(201).json(req.body);
}

export default postReciboSimples
