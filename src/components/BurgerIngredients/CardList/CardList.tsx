import { IngredientInterface } from '../../../interfaces/inredient_interface';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';


interface CardListProps {
  listItems?: IngredientInterface[];
  tab?: string
}

const CardList = (props: CardListProps) => (
  <div className={styles.BlockIngredients}>
    <p className="text text_type_main-medium">{props.tab}</p>
    <div className={styles.CardList}>
      {props.listItems && props.listItems.map(item => (
        <CardItem key={item._id} {...item} />
      ))}
    </div>
  </div>
)


export default CardList;
