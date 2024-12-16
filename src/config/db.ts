import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'],
    logging: false, // Desactiva console logs de consultas,
    dialectOptions: {
        ssl: {
            require: 'true'
        }
    }
})

export default db;