import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useContext } from 'react';
import { IngridientInterface } from '../../interfaces/inridient_interface';
import { IngridientsContext } from '../../services/IngridientsContext';
import styles from './BurgerIngredients.module.css';
import CardList from './CardList/CardList';



const tabs = [
  { id: 'bun', value: "Булки" },
  { id: 'sauce', value: "Соусы" },
  { id: 'main', value: "Начинки" },
]

const BurgerIngredients = () => {

  const ingridients = useContext(IngridientsContext);

  const [curentType, setCurrentType] = React.useState<string>(tabs[0].id);


  const setCurrent = (currentTab: string) => {
    setCurrentType(currentTab)
  }

  // Получение продуктов по типу
  const filterByType = (find_type: string): IngridientInterface[] => {
    return ingridients.filter((item: IngridientInterface) => {
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
