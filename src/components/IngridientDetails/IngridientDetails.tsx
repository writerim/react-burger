import styles from './IngridientDetails.module.css'
import { IngredientInterface } from '../../interfaces/inredient_interface';
// Еще модальное окно. Ммм фигма Ui
const IngridientDetails = (props: IngredientInterface) => {

  return (
    <>
      <img src={props.image} className={styles.Img} alt="" />
      <p className={`text text_type_main-medium ${styles.Title}`}>{props.name}</p>
      <div className={styles.Compound}>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Калории,ккал</p>
          {props.calories}
        </div >
        <div className={styles.Col}>
          <p className="text text_type_main-default">Белки, г</p>
          {props.proteins}
        </div>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Жиры, г</p>
          {props.fat}
        </div>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Углеводы, г</p>
          {props.carbohydrates}
        </div>
      </div >
    </>
  )
};


export default IngridientDetails;
