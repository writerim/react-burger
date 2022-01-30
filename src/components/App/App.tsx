import React, {useEffect} from 'react';
import './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import selctedIngridients from './../../utils/data_selected';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const URL_GET_LIST_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients';


function App() {

  const [ingridients , setIngridients] = React.useState([]);
  

  useEffect(() => {
    fetch(URL_GET_LIST_INGRIDIENTS)
    .then(r => r.json())
    .then(req => {
      setIngridients(req.data)
    })
    .catch(e => {
      console.log(e)
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
          <BurgerConstructor data={selctedIngridients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
