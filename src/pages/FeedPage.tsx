import { useEffect } from "react";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/actions/ws";
import styles from "./FeedPage.module.css"
import FeedInfo from "../components/Feed/Feed";
import FeedItem from "../components/Feed/Item";
import { OrderInterface } from "../interfaces/order";
import { useNavigate } from "react-router-dom";
import { AppDispatch, useDispatch } from "../types/dispatch";
import { useSelector } from "../types/selector";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { orders } = useSelector(state => state.ws.data)
  
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const setIsShowFeed = () => {
    navigate('/')
  }

  return  (
      <main>
        <h1>"Лента заказов"</h1>
        <div className={styles.conteiner + ' mt-5'}>
          <section className={styles.item}>	
          	{orders && orders.map((order : OrderInterface, index : number) => <FeedItem key={order._id} order={order} />)}
          </section>
          <section className={styles.item}>
            <FeedInfo />
          </section>
        </div>
      </main>
  )
};
