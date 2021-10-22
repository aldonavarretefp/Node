import { Response, Request } from "express";

export const getUsuarios = (req:Request, res:Response)=>{
    res.status(200).json({
        msg:'getUsuarios'
    });
    
}
export const getUsuario = (req:Request, res:Response)=>{
    const {id} = req.params;
    res.status(200).json({
        msg:'getUsuario'
    });
    
}
export const postUsuario = (req:Request, res:Response)=>{
    const {body} = req;
    res.status(200).json({
        msg:'postUsuario',
        body
    });
    
}
export const putUsuario = (req:Request, res:Response)=>{
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        msg:'putUsuario',
        body
    });
    
}
export const deleteUsuario = (req:Request, res:Response)=>{
   
    const {id} = req.params;
    res.status(200).json({
        msg:'deleteUsuario',
        id
    });
    
}