import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/actions/ws";
import styles from "./FeedPage.module.css"
import { RootState } from "../services/reducers";
import FeedInfo from "../components/Feed/Feed";
import FeedItem from "../components/Feed/Item";
import { OrderInterface } from "../interfaces/order";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../types/dispatch";

export const FeedPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { orders } = useSelector((state:RootState) => state.ws.data)
  
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
