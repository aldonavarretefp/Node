const {Router} = require('express');
const {body} = require('express-validator');
const router = Router();

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const { esRoleValido } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

//Endpoints:
//Obtener info
router.get('/', usuariosGet);
//Actualizando data
router.put('/',usuariosPut)
//Crear nuevos recursos
router.post('/',[
    body("correo","CORREO_INVALIDO").isEmail(),
    body("password","CONTRASENIA MAYOR A 6 CARACTERES").isLength({min:5})
    .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
    body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
    // body("rol","ROL NO VALIDO").isIn(["ADMIN_ROLE","USER_ROLE"]),
    body('rol').custom(esRoleValido),
    validarCampos
],usuariosPost);
//Borrar, marcandolo nadamas
router.delete('/', usuariosDelete)
router.patch('/', usuariosPatch);



module.exports = router;