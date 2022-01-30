import './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import all_ingridietns from './../../utils/data';
import selcted_ingridients from './../../utils/data_selected';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function App() {

  return (
    <div className="container">
      <AppHeader />
      <div className="row">
        <div className="col">
          <BurgerIngredients data={all_ingridietns}/>
        </div>
        <div className="col">
          <BurgerConstructor data={selcted_ingridients}/>
        </div>
      </div>
    </div>
  );
}

export default App;
