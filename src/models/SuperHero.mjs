import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    nombreSuperheroe:{ type: String, required: true},
    nombreReal:{ type: String, required: true},
    nombreSociedad: { type: String },
    edad: {type: Number, required: true},
    planetaOrigen: {type: String, default:'Desconocido'},
    debilidad: String,
    poder: [String],
    habilidadEspecial: { type: String }, 
    aliado:[String],
    enemigo:[String],
    createdAt: {type: Date, default:Date.now},
    createdBy: { type: String, required: true }
}, { collection: 'Grupo-03' });

export default mongoose.model('SuperHero', superheroSchema);