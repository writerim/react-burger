import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { OrderInterface } from "../../interfaces/order";
import { RootState } from "../../services/reducers";
import { getOrderDate, getOrderStatusI18n } from "../../utils/order";
import styles from './Feed.module.css';

interface FeedItemInterface {
    order : OrderInterface
}

const FeedItem = ({ order } :FeedItemInterface) => {
    const location = useLocation();
    const pathName = (location.pathname === '/feed') ? `/feed/${order.number}` : `/profile/orders/${order.number}`;
    const date = getOrderDate(order.createdAt);

    const items = useSelector((state: RootState) => state.ingredients);


    let price = 0;

    return (
        <>
            <Link className={styles.link} to='??' >
                <div className={styles.item}>
                    <div className={styles.header}>
                        <p className="text text_type_digits-default">#{order.number}</p>
                        <p className="text text_type_main-default text_color_inactive">{date}</p>
                    </div>
                    <h2 className="text text_type_main-medium mt-6">{order.name}</h2>
                    {(location.pathname === '/profile/orders') && (<p className="mt-2">{getOrderStatusI18n(order.status)}</p>)}
                    <div className={styles.footer + ' mt-6'}>
                        <div className={styles.img_container}>
                            {order.ingredients.map((item: string, index: number) => {
                                const zIndex = 6 - index;
                                const ingredient = (items != null) && items.find((product) => product._id === item);
                                if (ingredient) {
                                    price += ingredient.price;
                                    const image = ingredient.image_large;
                                    if (zIndex > 0) {
                                        return (
                                            <div className={styles.img_item} style={{ zIndex }} key={index}>
                                                <img src={image} alt={ingredient.name} />
                                            </div>
                                        );
                                    }
                                    if (zIndex === 0) {
                                        return (
                                            <div className={styles.img_item_col} style={{ zIndex: 0 }} key={index}>
                                                <div className={styles.img_item_cola}>
                                                    <img src={image} alt={ingredient.name} />
                                                </div>
                                                <span className={styles.col + " text text_type_main-default"}>{`+${order.ingredients.length - 6}`}</span>
                                            </div>
                                        );
                                    }
                                }
                            })}
                        </div>
                        <div className={styles.price}>
                            <span className="text text_type_digits-default mr-2">{price}</span>
                            <CurrencyIcon type='primary' />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default FeedItem;