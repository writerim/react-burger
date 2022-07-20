import { PayloadAction } from "@reduxjs/toolkit";
import { OrderInterface } from "../interfaces/order";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_ERROR_USER, WS_CONNECTION_START_USER, WS_CONNECTION_SUCCESS_USER, WS_GET_MESSAGE_USER, WS_SEND_MESSAGE_USER } from "../services/actions/wsUser";
import { WsOrderDataType } from "./wsData";

export type WsDataType = {
  orders: OrderInterface[];
  total: number;
  totalToday: number;
};

export const wsActionsUser = {
  wsInit: WS_CONNECTION_START_USER,
  wsSendMessage: WS_SEND_MESSAGE_USER,
  onOpen: WS_CONNECTION_SUCCESS_USER,
  onClose: WS_CONNECTION_CLOSED_USER,
  onError: WS_CONNECTION_ERROR_USER,
  onMessage: WS_GET_MESSAGE_USER,
};


export type InitialSocketStateType = {
  wsConnected: boolean;
  data: WsDataType;
  error?: PayloadAction | null;
};

  export interface IWSStartUser {
    type: typeof WS_CONNECTION_START_USER;
  }

  export interface WsUserSuccessConnectInterface {
    type: typeof WS_CONNECTION_SUCCESS_USER
    payload: PayloadAction;
  }

  export interface WsUserErrorConnectInterface {
    type: typeof WS_CONNECTION_ERROR_USER
    payload: PayloadAction;
  }


  export interface WsUserClosedConnectInterface {
    type: typeof WS_CONNECTION_CLOSED_USER
    payload: PayloadAction;
  }
  
  export interface WsGetMessageUserInterface {
    type: typeof WS_GET_MESSAGE_USER;
    payload: WsOrderDataType;
  }
  
  export interface WsSendMessageUserInterface {
    type: typeof WS_SEND_MESSAGE_USER;
  }
  
  export type WsActionUserType =
    | IWSStartUser
    | WsUserSuccessConnectInterface
    | WsUserErrorConnectInterface
    | WsUserClosedConnectInterface
    | WsGetMessageUserInterface
    | WsSendMessageUserInterface;