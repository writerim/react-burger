import { useEffect } from "react";
import FeedItem from "../components/Feed/Item";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_START_USER } from "../services/actions/wsUser";
import { AppDispatch, useDispatch } from "../types/dispatch";
import { useSelector } from "../types/selector";
import styles from "./Profile.module.css";

export const ProfileOrdersPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_USER });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED_USER });
    };
  }, [dispatch]);

  const { orders } = useSelector(state => state.wsUser.data);

  return (
    <div>
      <main>
        <div className={styles.conteiner + ' pt-20'}>
          <section className={styles.menu + ' mr-15'}>
            <ProfileMenu />
            <p className={styles.text + ' text text_type_main-default text_color_inactive mt-20'}>В этом разделе вы можете просмотреть свою историю заказов</p>
          </section>
          <section className={styles.orders}>
            {orders && orders.map((order: any, index: number) => <FeedItem key={order._id} order={order} />)}
          </section>
        </div>
      </main>
    </div>
  );
}