"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var usuario_1 = __importDefault(require("../routes/usuario"));
var Server = /** @class */ (function () {
    function Server() {
        this.paths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        //Cors
        this.app.use((0, cors_1.default)({}));
        // Body lecture
        this.app.use(express_1.default.json());
        //Static folder
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Servidor corriendo en el puerto " + _this.port);
        });
    };
    Server.prototype.routes = function () {
        this.app.use(this.paths.usuarios, usuario_1.default);
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map