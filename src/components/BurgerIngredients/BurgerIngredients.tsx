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
class BurgerIngredients extends React.Component<BurgerIngredientsProps, BurgerIngredientsState> {

  constructor(props: BurgerIngredientsProps) {
    super(props);

    this.state = {
      current: this.props.data.length ? this.props.data[0].type : '',
      data: this.props.data
    };

    this.setCurrent = this.setCurrent.bind(this)
    this.filterByType = this.filterByType.bind(this)
  }

  setCurrent(current_tab: string) {
    this.setState({ current: current_tab })
  }

  // Получение продуктов по типу
  filterByType(find_type: string): CardItemI[] {
    return this.state.data.filter(item => {
      return item.type === find_type
    })
  }
  



  render() {
    return (
      <>
        <h1 className='text text_type_main-large'>Соберите бургер</h1>
        <div className={styles.Tabs}>
          {tabs.map(tab => (
            <Tab key={tab.id} value={tab.id} active={this.state.current === tab.id} onClick={this.setCurrent}>
              {tab.value}
            </Tab>
          ))}
        </div>
        <div className={styles.Overflow}>
          {tabs.map((tab) =>
            <CardList 
              listItems={this.filterByType(tab.id)} 
              tab={tab.value} 
              key={tab.id}/>
          )}
        </div>
      </>
    )
  }
};

export default BurgerIngredients;
