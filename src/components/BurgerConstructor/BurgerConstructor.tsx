import ItemListIngridients from './ItemListIngridients/ItemListIngridients';
import { IngridientInterface } from '../../interfaces/inridient_interface';
import SummaryPrice from './SummaryPrice/SummaryPrice';
import styles from './BurgerConstructor.module.css'

interface BurgerConstructorProps {
  data: IngridientInterface[]
}


const BurgerConstructor = (props: BurgerConstructorProps) => {

  const totalPrice = (data: IngridientInterface[]): number => {
    let totalPrice = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      totalPrice += element.price
    }
    return totalPrice
  }

  return (
    <div data-testid="BurgerConstructor">
      <ItemListIngridients items={props.data} />
      <SummaryPrice totalPrice={totalPrice(props.data)} />
    </div>
  )
};

export default BurgerConstructor;
