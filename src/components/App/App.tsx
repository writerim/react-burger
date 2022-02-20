import React, { useEffect } from 'react';
import styles from './App.module.css';
import selctedIngredients from './../../utils/data_selected';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function App() {
  return (
    <div className={styles.Container}>
      <AppHeader />
      <div className={styles.ContainerWorkFlow}>
        <div className={styles.LeftColumn}>
          <BurgerIngredients />
        </div>
        <div className={styles.RightColumn}>
          <BurgerConstructor data={selctedIngredients} />
        </div>
      </div>
    </div>
  );
}

export default App;
