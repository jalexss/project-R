import { recetas } from "./recetaTest"

export const getRecetaById = (id) => {

    return recetas.find( receta => receta.id.toString() === id)
}