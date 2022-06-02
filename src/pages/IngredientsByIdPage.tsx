import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngridientDetails from "../components/IngridientDetails/IngridientDetails";
import { SET_CURENT_INGREDIENT } from "../services/actions/curentIngredient";
import { RootState } from "../services/reducers";
import styles from "./IngredientsByIdPage.module.css"

const IngredientsByIdPage = (): JSX.Element => {

  const dispatch = useDispatch();

  const allIngredients = useSelector((store: RootState) => store.ingredients)

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