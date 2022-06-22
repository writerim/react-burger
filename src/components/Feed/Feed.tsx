import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/reducers";
import styles from './Feed.module.css';


const FeedInfo = () => {

    const { data } = useSelector((state:RootState) => state.ws);

    const orders: { created:string[], pending:string[], done:string[] } = useMemo(() => {
        let orders: { created:string[], pending:string[], done:string[] } = { created: [], pending: [], done: [] };
        data.orders.map((order, index) => {
            switch (order.status) {
                case 'created':
                    orders.created = [...orders.created, order.number];
                    break;
                case 'pending':
                    orders.pending = [...orders.pending, order.number];
                    break;
                case 'done':
                    orders.done = [...orders.done, order.number];
                    break;
            }
        })
        return orders;
    }, [data.orders]);

    return (
        <>
            <div className={styles.status}>
                <div className={styles.status_item}>
                    <p className="text text_type_main-medium mb-4">Готовы:</p>
                    <ul className={styles.list}>
                        {orders.pending.map((order: string, index: number) => {
                            return (
                                <li className="text text_type_digits-default mt-2" key={index}>{order}</li>
                            )
                        }
                        )}
                    </ul>
                </div>
                <div className={styles.status_item}>
                    <p className="text text_type_main-medium">В работе:</p>
                    <ul className={styles.list}>
                        {orders.created.map((order: string, index: number) => (
                            <li className="text text_type_digits-default mt-2" key={index}>{order}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text text_type_main-medium mt-15">Выполнено за все время:</p>
            <p className={styles.ts + " text text_type_digits-large"}>{data.total}</p>
            <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
            <p className={styles.ts + " text text_type_digits-large"}>{data.totalToday}</p>
        </>
    )
};

export default FeedInfo;