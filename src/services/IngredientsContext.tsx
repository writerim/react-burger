import { createContext } from "react";
import { IngredientInterface } from "../interfaces/inredientInterface";


const defaultIngridients: IngredientInterface[] = []

export const IngredientsContext = createContext(defaultIngridients);