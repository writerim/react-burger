import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import AppHeader from './components/AppHeader/AppHeader';

import all_ingridietns from './utils/data';
import selcted_ingridients from './utils/data_selected';


function App() {

  const style = {maxWidth : 528}

  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <div className="col">
          <BurgerIngredients data={all_ingridietns}/>
        </div>
        <div className="col" style={style}>
          <BurgerConstructor data={selcted_ingridients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
