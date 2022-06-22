import { PayloadAction } from "@reduxjs/toolkit";
import { OrderInterface } from "../interfaces/order";

export type WsOrderDataType = {
    orders: OrderInterface[]
    total: number;
    totalToday: number;
};

export type InitialSocketStateType = {
    wsConnected: boolean;
    data: WsOrderDataType
    error?: PayloadAction | null;
};