import { getCookie } from '../../utils/cookie';
import { AnyAction, MiddlewareAPI } from 'redux';
import { WsActionsType } from '../../types/ws';

export const socketMiddleware = (wsUrl : string, wsActions : WsActionsType, user : boolean) => {
  return (store : MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next : (item: AnyAction) => void) => (action : AnyAction ) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const token = user ? getCookie('token') : null;
      if (type === wsInit) {
        socket = token ? new WebSocket(wsUrl + '?token=' + token) : new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = ( event : AnyAction ) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = ( event : AnyAction ) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = ( event : AnyAction ) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = ( event : AnyAction ) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = { ...payload };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
