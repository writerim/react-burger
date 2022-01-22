import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './BurgerConstructor.module.css';
import data from '../utils/data';
import CardList from './CardList/CardList';

interface BurgerTabs {
  id: string;
  value: string;
}

interface BurgerConstructorProps {
  tabs: BurgerTabs[]
}

interface BurgerConstructorState {
  current?: string
  data: CardItemI[]
}

interface CardItemI {
    name : string;
    type : string;
    proteins : number;
    fat : number;
    carbohydrates : number;
    calories : number;
    price : number;
    image : string;
    image_mobile : string;
    image_large : string;
    _id : string;
    __v : number;
}

class BurgerConstructor extends React.Component<BurgerConstructorProps, BurgerConstructorState> {

  constructor(props: BurgerConstructorProps) {
    super(props);

    this.state = {
      current : props.tabs.length ? props.tabs[0].id : '',
      data : data
    };

    this.setCurrent = this.setCurrent.bind(this)
    this.filterByType = this.filterByType.bind(this)
  }

  setCurrent(current_tab: string){
    this.setState({current : current_tab})
  }

  filterByType(find_type: string): CardItemI[] {
    return this.state.data.filter(item => {
      return item.type === find_type
    })
  }


  render(){ 
    return (
      <div className={styles.BurgerConstructor} data-testid="BurgerConstructor">
        <h1>Соберите бургер</h1>
        <div style={{ display: 'flex' }}>
          {this.props.tabs.map(tab => (
              <Tab key={tab.id} value={tab.id} active={this.state.current === tab.id} onClick={this.setCurrent}>
                {tab.value}
              </Tab>
          ))}
        </div>
        {this.props.tabs.map((tab) =>
            <CardList listItems={this.filterByType(tab.id)} tab={tab.value}/>
        )}
      </div>
    )
  }
};

export default BurgerConstructor;
