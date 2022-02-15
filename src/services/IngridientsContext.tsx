import { createContext } from "react";
import { IngridientInterface } from "../interfaces/inridient_interface";


const defaultIngridients: IngridientInterface[] = []

export const IngridientsContext = createContext(defaultIngridients);