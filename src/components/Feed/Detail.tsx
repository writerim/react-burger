import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrderDate, getOrderStatusI18n } from "../../utils/order";
import styles from './Feed.module.css';
import Modal from "../Modal/Modal";
import { OrderInterface } from "../../interfaces/order";
import { useEffect } from "react";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/ws";
import { useSelector } from "../../types/selector";
import { useDispatch } from "../../types/dispatch";


interface FeedDetailsInterface {
    isProfile: boolean
}

interface FeedDetailBodyProps {
    id: string | undefined
    order: OrderInterface
}

const FeedDetailBody = ({ id, order }: FeedDetailBodyProps) => {
    const items = useSelector(state => state.ingredients)
    const date = (order) ? getOrderDate(order.createdAt) : null;
    let total = 0;
    return (
        <div className={styles.container}>
            <p className={styles.center + " text text_type_digits-default mt-6"}>#{id}</p>
            <p className="text text_type_main-medium mt-10">{order.name}</p>
            <p className={`text text_type_main-default mt-10 ${order.status}`}>{getOrderStatusI18n(order.status)}</p>
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
    )
}

const FeedDetails = ({ isProfile }: FeedDetailsInterface) => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch();
    const { id } = useParams();
    const { orders } = useSelector( state => state.ws.data );

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);

    const order = (orders.length > 0) && orders.find((item) => item.number == id);

    const setIsShowFeedDetail = () => {
        navigate('/feed' , {state :{background: location}})
    }

    if (!order) {
        return <></>
    }

    return (location.state ?
        <Modal title="" setShow={setIsShowFeedDetail}>
            <FeedDetailBody id={id} order={order} />
        </Modal>
        : <FeedDetailBody id={id} order={order} />
    );
};

export default FeedDetails;