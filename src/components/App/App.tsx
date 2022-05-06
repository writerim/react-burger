import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <div className={styles.Container}>
      <AppHeader />
      <div className={styles.ContainerWorkFlow}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.LeftColumn}>
            <BurgerIngredients />
          </div>
          <div className={styles.RightColumn}>
            <BurgerConstructor />
          </div>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
