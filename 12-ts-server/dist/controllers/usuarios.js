"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
var getUsuarios = function (req, res) {
    res.status(200).json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
var getUsuario = function (req, res) {
    var id = req.params.id;
    res.status(200).json({
        msg: 'getUsuario'
    });
};
exports.getUsuario = getUsuario;
var postUsuario = function (req, res) {
    var body = req.body;
    res.status(200).json({
        msg: 'postUsuario',
        body: body
    });
};
exports.postUsuario = postUsuario;
var putUsuario = function (req, res) {
    var body = req.body;
    var id = req.params.id;
    res.status(200).json({
        msg: 'putUsuario',
        body: body
    });
};
exports.putUsuario = putUsuario;
var deleteUsuario = function (req, res) {
    var id = req.params.id;
    res.status(200).json({
        msg: 'deleteUsuario',
        id: id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map