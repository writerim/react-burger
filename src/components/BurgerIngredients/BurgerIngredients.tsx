import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, UIEvent } from 'react';
import { IngredientInterface } from '../../interfaces/inredientInterface';
import { SET_ACTIVE_TAB } from '../../services/actions/activeTab';
import { useDispatch } from '../../types/dispatch';
import { useSelector } from '../../types/selector';
import styles from './BurgerIngredients.module.css';
import CardList from './CardList/CardList';



const tabs = [
  { id: 'bun', value: "Булки" },
  { id: 'sauce', value: "Соусы" },
  { id: 'main', value: "Начинки" },
]

const BurgerIngredients = () => {

  const dispatch = useDispatch()

  const ingredients = useSelector(store => store.ingredients);
  const activeTab = useSelector(store => store.activeTab);

  const scrollRef = useRef<HTMLDivElement>(null)

  const setCurrent = (currentTab: string) => {

    if (!scrollRef.current || !scrollRef.current?.children) {
      return
    }

    const current = scrollRef.current

    tabs.map((tab, indexTab) => {
      for (let index = 0; index < current?.children.length; index++) {
        if (tab.id == currentTab && index == indexTab && current.children.item(index) !== null) {
          let curentPos = current.children.item(index)
          if (curentPos !== null) {
            current.scrollTop = curentPos.clientHeight
          }
        }
      }
    })

    dispatch({
      type: SET_ACTIVE_TAB,
      activeTab: currentTab
    })
  }

  // Получение продуктов по типу
  const filterByType = (find_type: string): IngredientInterface[] => {
    return ingredients.filter((item: IngredientInterface) => {
      return item.type === find_type
    })
  }

  const handlerScroll = (event: UIEvent<HTMLDivElement>) => {
    event.preventDefault()

    // Находим то как низко мы пали
    let topScroll = scrollRef.current?.scrollTop

    let difference = []

    if (scrollRef.current?.children) {
      for (let index = 0; index < scrollRef.current?.children.length; index++) {
        let h = scrollRef.current?.children.item(index)?.clientHeight
        if (h && topScroll) {
          difference[index] = Math.abs(topScroll - h)
        }
      }
    }

    let min = Math.min.apply(null, difference)
    let index = difference.indexOf(min)
    if (index == -1) {
      index = 0
    }
    dispatch({
      type: SET_ACTIVE_TAB,
      activeTab: tabs[index].id
    })

  }

  return (
    <>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={styles.Tabs}>
        {tabs.map(tab => (
          <Tab key={tab.id} value={tab.id} active={activeTab === tab.id}
            onClick={setCurrent}
          >
            {tab.value}
          </Tab>
        ))}
      </div>
      <div className={styles.Overflow}
        ref={scrollRef}
        onScroll={handlerScroll}
      >
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
