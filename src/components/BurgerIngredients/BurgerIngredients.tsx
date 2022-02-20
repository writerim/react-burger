import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../interfaces/inredient_interface';
import { getIngredientsData } from '../../services/ingredients';
import { RootState } from '../../services/reducers';
import styles from './BurgerIngredients.module.css';
import CardList from './CardList/CardList';



const tabs = [
  { id: 'bun', value: "Булки" },
  { id: 'sauce', value: "Соусы" },
  { id: 'main', value: "Начинки" },
]

const BurgerIngredients = () => {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientsData())
  }, [])


  const ingredients = useSelector((store: RootState) => store.ingredients);

  const [curentType, setCurrentType] = React.useState<string>(tabs[0].id);



  const setCurrent = (currentTab: string) => {
    setCurrentType(currentTab)
  }

  // Получение продуктов по типу
  const filterByType = (find_type: string): IngredientInterface[] => {
    return ingredients.filter((item: IngredientInterface) => {
      return item.type === find_type
    })
  }



  return (
    <>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={styles.Tabs}>
        {tabs.map(tab => (
          <Tab key={tab.id} value={tab.id} active={curentType === tab.id} onClick={setCurrent}>
            {tab.value}
          </Tab>
        ))}
      </div>
      <div className={styles.Overflow}>
        {tabs.map((tab) =>
          <CardList
            listItems={filterByType(tab.id)}
            tab={tab.value}
            key={tab.id} />
        )}
      </div>
    </>
  )
};


export default BurgerIngredients;
