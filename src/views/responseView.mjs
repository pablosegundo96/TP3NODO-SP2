export function renderizarSuperheroe(superheroe){
    return {
        id: superheroe.id,
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        "Nombre Sociedad": superheroe.nombreSociedad,
        Edad: superheroe.edad,
        "Planeta de Orgien": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poder: superheroe.poder,
        "Habilidad Especial": superheroe.habilidadEspecial,
        Aliado: superheroe.aliado,
        Enemigo: superheroe.enemigo
    };
}

export function renderizarListaSuperheroes(superheroes){
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}