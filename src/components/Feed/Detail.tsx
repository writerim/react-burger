import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrderDate } from "../../utils/order";
import { RootState } from "../../services/reducers";
import styles from './Feed.module.css';


interface FeedDetailsInterface {
    isProfile: boolean
}

const FeedDetails = ({ isProfile }:FeedDetailsInterface) => {
    const { id } = useParams();
    const { orders } = useSelector(
        (state: RootState) => isProfile ? state.wsUser.data : state.ws.data
    );
    const items = useSelector((state: RootState) => state.ingredients)


    const order = (orders.length > 0) && orders.find((item) => item.number == id);
    const date = (order) ? getOrderDate(order.createdAt) : null;

    let total = 0;

    const status: { name: string, style: string } = (order && (order.status === 'done')) ? { name: 'Выполнен', style: 'done' }
        : (order && (order.status === 'pending')) ? { name: 'Создан', style: 'pending' }
            : (order && (order.status === 'created')) ? { name: 'Готовится', style: 'created' }
                : { name: 'Отменён', style: 'cancel' };

    return (
        <>
            {order && (
                <div className={styles.container}>
                    <p className={styles.center + " text text_type_digits-default mt-6"}>#{id}</p>
                    <p className="text text_type_main-medium mt-10">{order.name}</p>
                    <p className={`text text_type_main-default mt-10 ${status.style}`}>{status.name}</p>
                    <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
                    <ul className={styles.list}>
                        {order.ingredients.map((item: string, index: number) => {
                            const ingredient = (items != null) && items.find((product) => product._id === item);
                            if (ingredient) {
                                const price = ingredient.price;
                                const image = ingredient.image_large;
                                const name = ingredient.name;
                                total += price;
                                return (
                                    <li className={styles.list_item + ' mb-4'} key={index}>
                                        <div className={styles.about}>
                                            <div className={styles.img_item} style={{ zIndex: 6 }} >
                                                <img src={image} alt={name} />
                                            </div>
                                            <p className="text text_type_main-default ml-4">{name}</p>
                                        </div>
                                        <div className={styles.price}>
                                            <span className="text text_type_digits-default mr-2">{price}</span>
                                            <CurrencyIcon type='primary' />
                                        </div>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <div className={styles.footer + ' mt-10'}>
                        <p className="text text_type_main-default text_color_inactive">{date}</p>
                        <p className={styles.price}>
                            <span className="text text_type_digits-default mr-2">{total}</span>
                            <CurrencyIcon type='primary' />
                        </p>
                    </div>


                </div>
            )}
        </>
    );
};

export default FeedDetails;