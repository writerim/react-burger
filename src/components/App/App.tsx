import React, { useEffect } from 'react';
import styles from './App.module.css';
import selctedIngredients from './../../utils/data_selected';
import { IngredientsContext } from './../../services/IngredientsContext';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const URL_GET_LIST_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients';


function App() {

  const [ingredients, setIngredients] = React.useState([]);

  useEffect(() => {
    fetch(URL_GET_LIST_INGRIDIENTS)
      .then(r => r.json())
      .then(req => {
        if (req.success) {
          setIngredients(req.data)
        } else {
          return Promise.reject(req.status);
        }
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div className={styles.Container}>
      <AppHeader />
      <div className={styles.ContainerWorkFlow}>
        <IngredientsContext.Provider value={ingredients}>
          <div className={styles.LeftColumn}>
            <BurgerIngredients />
          </div>
          <div className={styles.RightColumn}>
            <BurgerConstructor data={selctedIngredients} />
          </div>
        </IngredientsContext.Provider>
      </div>
    </div>
  );
}

export default App;
