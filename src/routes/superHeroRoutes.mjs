//gestionar las solicitudes HTTP , llamando a los servidores correspondientes y utilizando las vistas para presentar los datos 
import{Router} from'express'; // Importa Router desde Express para crear rutas 
import{
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
} from '../controllers/superheroesController.mjs';   // Importa los controladores que manejan las operaciones para superhéroes


const router = Router(); // Crea una instancia de Router para definir las rutas del módulo


// Define una ruta GET para obtener y buscar segun los controladores
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);


export default router;


/* ejemplo
http://localhost:3000/api/heroes
http://localhost:3000/api/heroes/672531113498a48a7ce9ea22
http://localhost:3000/api/heroes/mayores-30
http://localhost:3000/api/heroes/buscar/nombreSuperheroe/Superman
*/