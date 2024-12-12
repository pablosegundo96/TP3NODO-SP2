//gestionar las solicitudes HTTP , llamando a los servidores correspondientes y utilizando las vistas para presentar los datos 
//usa uperheroesService.mjs para acceder a los datos de superhéroes.
//usa  responseView.mjs para presentar los datos formateados en la respuesta.

import { obtenerSuperheroePorId,  obtenerTodosLosSuperheroes ,buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30} from "../services/SuperheroesService.mjs";

import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req,res){
    const {id} = req.params; // Obtiene el ID del superhéroe de los parámetros de la URL.
    const superheroe = await obtenerSuperheroePorId(id); 

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe)); // Si existe, renderiza y envía el superhéroe.
    }else{
        res.status(404).send({mensaje:"Superheroe no encontrado"}); // Si no existe, envía un mensaje de error 404.
    }
}

export async function obtenerTodosLosSuperheroesController(req,res){
    const superheroes = await obtenerTodosLosSuperheroes();
    console.log(superheroes.length) // Muestra en consola la cantidad de superhéroes obtenidos.
    res.send(renderizarListaSuperheroes(superheroes)); // Renderiza y envía la lista de superhéroes.
}

export async function buscarSuperheroesPorAtributoController(req,res){
    try{const {atributo, valor} = req.params; // Obtiene el atributo y su valor de los parámetros de la URL.
    const superheroes = await buscarSuperheroesPorAtributo(atributo,valor);

    if(superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes)); // Si encuentra resultados, renderiza y envía la lista de superhéroes.
    }else{
        res.status(404).send({mensaje: "No se encontraron superheroes con ese atributo"}) // Si no hay resultados, envía mensaje de error 404.
    }}catch(error){
        res.status(500).send('Error al buscar superhéroes por atributo');
    }
}



export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        res.status(200).send(renderizarListaSuperheroes(superheroes)); //Renderiza y envía la lista de superhéroes mayores de 30 años.
    } catch (error) {
        res.status(500).send('Error al obtener superhéroes mayores de 30 años'); // Captura errores y envía un mensaje de error 500.
    }
}