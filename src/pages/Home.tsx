import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients'
import styles from '../components/App/App.module.css';

const Home = () => {
    return (
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
    )
}

export default Home