import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IngridientDetails from "../components/IngridientDetails/IngridientDetails";
import { SET_CURENT_INGREDIENT } from "../services/actions/curentIngredient";
import { AppDispatch, useDispatch } from "../types/dispatch";
import { useSelector } from "../types/selector";
import styles from "./IngredientsByIdPage.module.css"

const IngredientsByIdPage = (): JSX.Element => {

  const dispatch = useDispatch();

  const allIngredients = useSelector(store => store.ingredients)

  const { id } = useParams()

  useEffect(() =>{
    if (allIngredients.length) {
      dispatch({
        type: SET_CURENT_INGREDIENT,
        playground: allIngredients.find(item => item._id === id)
      })
    }
  })

  return <div className={styles.wrap}><IngridientDetails /></div>
}

export default IngredientsByIdPage