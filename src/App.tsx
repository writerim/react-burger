import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import 'bootstrap/dist/css/bootstrap.css';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';

function App() {

  const tabs = [
    { id: 'bun', value: "Булки" },
    { id: 'sauce', value: "Соусы" },
    { id: 'main', value: "Начинки" },
  ]

  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <div className="col">
          <BurgerIngredients tabs={tabs}/>
        </div>
        <div className="col">
          <BurgerConstructor />
        </div>
      </div>
    </div>
  );
}

export default App;
