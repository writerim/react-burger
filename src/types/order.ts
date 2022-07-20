type OrderDetailtOuter = {
    success: boolean;
    name: string;
    order: {
        [number: string]: number
    };
}


export type OrderAction = {
    type: string
    playground: OrderDetailtOuter
}