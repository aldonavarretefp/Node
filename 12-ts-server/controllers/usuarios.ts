import e, { Response, Request } from "express";
import Usuario from '../models/usuario';

export const getUsuarios = async (req:Request, res:Response)=>{
    try{
        const usuarios =  await Usuario.findAll();
        res.status(200).json({
            msg:'getUsuarios',
            usuarios
        });
    }catch(error){
        res.status(500).json({
            msg:'error',
            error
        });
    }
    
}
export const getUsuario = async(req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        if(usuario !== null){
            res.status(200).json({
                msg:'getUsuario',
                usuario
            });
        }else{
            res.status(404).json({
                msg:`No existe el usuario con id: ${id}`
            });
        }
    }catch(error){
        res.status(500).json({
            msg:'error',
            error
        });
    }
    
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