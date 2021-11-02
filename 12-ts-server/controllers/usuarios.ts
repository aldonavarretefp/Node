import e, { Response, Request } from "express";
import Usuario from '../models/usuario';

export const getUsuarios = async (req:Request, res:Response)=>{
    try{
        const usuarios =  await Usuario.findAll({
            where:{
                estado:1
            }
        });
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
export const postUsuario = async (req:Request, res:Response)=>{
    const {body} = req;
    try {
        const existeEmail = await Usuario.findOne({
            where:{
                email:body.email
            }
        });
        if(existeEmail){ 
            return res.status(400).json({
                msg:'El email ya existe'
            });
        }
        const usuario = await Usuario.create(body);
        await usuario.save();

        res.status(200).json(
            usuario
        );
    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
    
}
export const putUsuario = async (req:Request, res:Response)=>{
    const {body} = req;
    const {id} = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        console.log(usuario);
        if(!usuario ){
            return res.status(404).json({
                msg:`No existe el usuario con el id: ${id}`
            });
        }
        
        await usuario.update(body);
        res.status(200).json(
            usuario
        );
    } catch (error) {
        res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
    
    
}
export const deleteUsuario = async (req:Request, res:Response)=>{
   
    const {id} = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if(!usuario ){
            return res.status(404).json({
                msg:`No existe el usuario con el id: ${id}`
            });
        }
        await usuario.update({
            estado:0
        });

        res.status(200).json({
            msg:"Usuario eliminado",
            usuario
        });
    }catch(err) {
        res.status(500).json({
            msg:'Hable con el administrador'
        });
    }
}