import { PayloadAction } from "@reduxjs/toolkit";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../services/actions/ws";
import { WsOrderDataType } from "./wsData";

export type WsActionsType = {
    wsInit: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
};

// Описание интерфейсов общения с сервером
export interface WsStartInterface { type: typeof WS_CONNECTION_START }

export interface WsSuccessConnectionInterface {
    type: typeof WS_CONNECTION_SUCCESS
    payload: PayloadAction;
}

export interface WsErrorConnectionInterface {
    type: typeof WS_CONNECTION_ERROR
    payload: PayloadAction;
}

export interface WsCloseConnectionInterface {
    type: typeof WS_CONNECTION_CLOSED
    payload: PayloadAction;
}

export interface WsMessageInterface {
    type: typeof WS_GET_MESSAGE;
    payload: WsOrderDataType;
}

export interface WsSendMessageInterface {
    type: typeof WS_SEND_MESSAGE;
}

export type WsActions =
    | WsSuccessConnectionInterface
    | WsErrorConnectionInterface
    | WsCloseConnectionInterface
    | WsMessageInterface
    | WsSendMessageInterface;