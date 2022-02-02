import React, { useEffect } from 'react';
import styles from './App.module.css';
import selctedIngridients from './../../utils/data_selected';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const URL_GET_LIST_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients';


function App() {

  const [ingridients, setIngridients] = React.useState([]);

  useEffect(() => {
    fetch(URL_GET_LIST_INGRIDIENTS)
      .then(r => r.json())
      .then(req => {
        if (req.success) {
          setIngridients(req.data)
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
        <div className={styles.LeftColumn}>
          <BurgerIngredients ingridients={ingridients} />
        </div>
        <div className={styles.RightColumn}>
          <BurgerConstructor data={selctedIngridients} />
        </div>
      </div>
    </div>
  );
}

export default App;
