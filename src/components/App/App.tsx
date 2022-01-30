import React, {useEffect} from 'react';
import './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import selcted_ingridients from './../../utils/data_selected';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function App() {

  const [ingridients , setIngridients] = React.useState([]);
  

  useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(r => r.json())
    .then(req => {
      setIngridients(req.data)
    })
  }, [])

  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <div className="col">
          <BurgerIngredients ingridients={ingridients}/>
        </div>
        <div className="col">
          <BurgerConstructor data={selcted_ingridients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
