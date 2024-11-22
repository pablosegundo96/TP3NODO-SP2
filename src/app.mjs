import express from 'express';
import{connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import { log } from 'console';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleeware para parsear JSON
app.use(express.json());

//Conexion a  Mongo DB
connectDB();

// Configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para Rutas no encontradas
app.use((req, res)=>{
    res.status(404).send({mensaje:"Ruta no encontrada"});
});

//iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});