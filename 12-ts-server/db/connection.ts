import  {Sequelize} from 'sequelize';

const db = new Sequelize('node', 'root', '200301Aldo!',
{
    host: 'localhost',
    dialect: 'mysql',
    
});



export default db;