import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import AppHeader from './components/AppHeader/AppHeader';


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
