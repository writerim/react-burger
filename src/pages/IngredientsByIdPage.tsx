import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngridientDetails from "../components/IngridientDetails/IngridientDetails";
import { SET_CURENT_INGREDIENT } from "../services/actions/curentIngredient";
import { getIngredientsData } from "../services/ingredients";
import { RootState } from "../services/reducers";
import styles from "./IngredientsByIdPage.module.css"

const IngredientsByIdPage = (): JSX.Element => {

  const dispatch = useDispatch();

  const allIngredients = useSelector((store: RootState) => store.ingredients)

  useEffect(() => {
    dispatch(getIngredientsData())
  }, [])
  const { id } = useParams()

  const curentIngredient = allIngredients.find(item => item._id === id)
  console.log(curentIngredient,allIngredients)

  if (curentIngredient) {
    dispatch({
      type: SET_CURENT_INGREDIENT,
      playground: curentIngredient
    })
  }

  return <div className={styles.wrap}><IngridientDetails /></div>
}

export default IngredientsByIdPage