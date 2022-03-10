import styles from './IngridientDetails.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import { useEffect } from 'react';

// Еще модальное окно. Ммм фигма Ui
const IngridientDetails = () => {

  const selectedIngredients = useSelector((store: RootState) => store.curentIngredient)

  console.log(selectedIngredients)



  return (
    <>
      <img src={selectedIngredients.image} className={styles.Img} alt="" />
      <p className={`text text_type_main-medium ${styles.Title}`}>{selectedIngredients.name}</p>
      <div className={styles.Compound}>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Калории,ккал</p>
          {selectedIngredients.calories}
        </div >
        <div className={styles.Col}>
          <p className="text text_type_main-default">Белки, г</p>
          {selectedIngredients.proteins}
        </div>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Жиры, г</p>
          {selectedIngredients.fat}
        </div>
        <div className={styles.Col}>
          <p className="text text_type_main-default">Углеводы, г</p>
          {selectedIngredients.carbohydrates}
        </div>
      </div >
    </>
  )
};


export default IngridientDetails;
