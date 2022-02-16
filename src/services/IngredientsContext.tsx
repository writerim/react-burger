import { createContext } from "react";
import { IngredientInterface } from "../interfaces/inredient_interface";


const defaultIngridients: IngredientInterface[] = []

export const IngredientsContext = createContext(defaultIngridients);