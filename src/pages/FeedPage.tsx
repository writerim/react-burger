import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../services/actions/ws";
import styles from "./FeedPage.module.css"
import { RootState } from "../services/reducers";
import FeedInfo from "../components/Feed/Feed";
import { WsOrderDataType } from "../types/wsData";
import FeedItem from "../components/Feed/Item";
import { OrderInterface } from "../interfaces/order";
import Modal from "../components/Modal/Modal";
import { useNavigate } from "react-router-dom";

export const FeedPage = () => {
  const dispatch = useDispatch();
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
    <Modal title="Лента заказов" setShow={setIsShowFeed}>
      <main>
        <div className={styles.conteiner + ' mt-5'}>
          <section className={styles.item}>	
          	{orders && orders.map((order : OrderInterface, index : number) => <FeedItem key={order._id} order={order} />)}
          </section>
          <section className={styles.item}>
            <FeedInfo />
          </section>
        </div>
      </main>
    </Modal>
  )
};
