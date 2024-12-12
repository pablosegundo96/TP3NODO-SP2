/* implementa los metodos definidos en la interfaz*/
import SuperHero from "../models/SuperHero.mjs";
 // Importa el modelo SuperHero, que representa la estructura de los datos de un superhéroe
import IRepository from "./IRepository.mjs";
// Importa la interfaz IRepository que define los métodos requeridos



// Define la clase SuperHeroRepository que extiende IRepository, lo cual significa que debe implementar sus métodos
class SuperHeroRepository extends IRepository{
  async obtenerPorId(id){
    return await SuperHero.findById(id); // / Usa findById del modelo SuperHero para buscar por ID en la base de datos
  
  }

  async obtenerTodos(){
    return await SuperHero.find({}); // Usa find sin condiciones para obtener todos los superheroe
  }

  async buscarPorAtributo(atributo,valor){
    return await SuperHero.find({ [atributo]: valor }); // Usa find con condiciones para determinado atributo y valor
  }

  async obtenerMayoresDe30() {
     return await SuperHero.find({ edad: { $gt: 30 } }); // Busca superhéroes con la edad mayor a 30 usando el operador $gt (greater than)
  }

  
}

// Exporta una instancia de SuperHeroRepository para que pueda ser utilizada directamente en otros módulos
export default new SuperHeroRepository();