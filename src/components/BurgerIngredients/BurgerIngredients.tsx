import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './BurgerIngredients.module.css';
import CardList from './CardList/CardList';

interface BurgerIngredientsTabs {
  id: string;
  value: string
}

interface BurgerIngredientsProps {
  data : CardItemI[]
}

interface BurgerIngredientsState {
  current?: string
  data: CardItemI[]
}

interface CardItemI {
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  _id: string;
  __v: number;
}


const tabs = [
  { id: 'bun', value: "Булки" },
  { id: 'sauce', value: "Соусы" },
  { id: 'main', value: "Начинки" },
]
//class BurgerIngredients extends React.Component<BurgerIngredientsProps, BurgerIngredientsState> {
const BurgerIngredients = (props: BurgerIngredientsProps) => {


  const [data , setData] = React.useState(props.data);
  const [curentType, setCurrentType] = React.useState(props.data.length ? props.data[0].type : '');

  
  const setCurrent = (currentTab: string) => {
    setCurrentType(currentTab)
  }

  // Получение продуктов по типу
  const filterByType = (find_type: string): CardItemI[] =>  {
    return data.filter(item => {
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
            key={tab.id}/>
        )}
      </div>
    </>
  )
};

export default BurgerIngredients;
