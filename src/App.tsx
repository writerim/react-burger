import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader/AppHeader';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';

function App() {

  const tabs = [
    {id :'bun', value : "Булки"},
    {id :'sauce', value : "Соусы"},
    {id :'main', value : "Начинки"},
  ]

  return (
    <div className="wrapper">
      <AppHeader/>
      <div className='page'>
        <BurgerConstructor tabs={tabs}/>
        <BurgerIngredients/>
      </div>
    </div>
  );
}

export default App;
