import express from "express";
import productsRouter from "./router";
import db from "./config/db";
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';

// Connect to database
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        //console.log(colors.blue("Conexion ecitosa a la BD"))
    } catch (error) {
        // console.log(error);
        console.log( colors.red.bold("Hubo un error al conectar a la BD"))
    }
}
connectDB()

// Instancia de exoress
const server = express();

// Permitir conexiones CORS
const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error("CORS Access denied"), false)
        }
    }
}
server.use(cors(corsOptions));

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

// Nandar a llamar las rudas desde raiz
server.use("/api/products", productsRouter);

/*

* test
server.get('/api', (req, res) => {
    res.json({msg: 'Desde API'})
})

*/

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server;