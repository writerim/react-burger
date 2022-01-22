import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import 'bootstrap/dist/css/bootstrap.css';

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
          <BurgerConstructor tabs={tabs} />
        </div>
        <div className="col">
          <BurgerIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
