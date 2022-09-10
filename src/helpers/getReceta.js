import { recetas } from "./recetaTest"

export const getReceta = (id, username) => {

    return recetas.find( receta => receta.id.toString() === id && receta.user.username === username )
}
