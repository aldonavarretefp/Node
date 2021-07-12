const {v4:uuidv4} = require('uuid');

class Tarea{
    id = '';
    desc ='';
    completadoEn;

    constructor( desc ){
        this.desc = desc;
        this.id = uuidv4();
        this.completadoEn = null;
    }



}

module.exports = Tarea;