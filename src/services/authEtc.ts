import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { Action } from "redux";
import { UserInterface } from "../interfaces/userInterface";
import { checkResponse } from "../utils/api";
import { deleteCookie, getTokens } from "../utils/cookie";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS, TOKEN_FAILED, TOKEN_REQUEST, TOKEN_SUCCESS } from "./actions/authEtc";
import { URL_AUTH_TOKEN, URL_FORGOT_PASSWORD, URL_LOGIN_USER, URL_LOGOUT_USER, URL_REGISTR_USER, URL_RESET_PASSWORD } from "./consts";
import { ActionUser } from "./reducers/authEtc";

interface ForgotPasswordInterface {
    email: string
}

interface ResetPasswordInterface {
    token: string
    password: string
}

export const forgotPassword = ({ email }: ForgotPasswordInterface) => {
    return async function (dispath: Dispatch<Action>) {
        await fetch(URL_FORGOT_PASSWORD, {
            body: JSON.stringify({ email: email }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkResponse)
            .then(req => {
                console.log(req)
            })
            .catch(e => {
                console.log(e)
            })
    }

};

export const resetPassword = ({ token, password }: ResetPasswordInterface) => {
    return async function (dispath: Dispatch<Action>) {
        await fetch(URL_RESET_PASSWORD, {
            body: JSON.stringify({ token, password }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkResponse)
            .then(req => {
                console.log(req)
            })
            .catch(e => {
                console.log(e)
            })
    }

};

interface LoginUserRequest {
    email: string
    password: string
}

interface LoginUserResp {
    success: boolean
    accessToken: string
    refreshToken: string
    user: {
        email: string
        name: string
    }
}


export const login = ({ email, password }: LoginUserRequest, redirect : () => void) => {
    return function (dispatch: Dispatch<ActionUser>) {
        fetch(URL_LOGIN_USER, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email, password })
        }).then(checkResponse)
            .then((res) => {
                getTokens(res);
                if (res && res.success) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        user: {
                            name: res.user.name,
                            email: res.user.email
                        }
                    });
                    redirect();
                } else {
                    dispatch({
                        type: LOGIN_FAILED,
                        user:  {}
                    });
                }
            })
            .catch((e) =>{
                dispatch({
                        type: LOGIN_FAILED,
                        user:  {}
                    });
            });
    };
};



export const logout = (redirect: () => void) => {
    return function (dispatch: Dispatch<Action>) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        fetch(URL_LOGOUT_USER, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ token: localStorage.refreshToken })
        }).then(checkResponse)
            .then((res) => {
                localStorage.removeItem('refreshToken');
                deleteCookie('token');
                if (res && res.success) {
                    dispatch({
                        type: LOGOUT_SUCCESS,
                    });
                    redirect();
                } else {
                    dispatch({
                        type: LOGOUT_FAILED
                    });
                }
            })
            .catch(() =>
                dispatch({
                    type: LOGOUT_FAILED
                })
            );
    };
};


interface RegisterUserRequest {
    name: string
    email: string
    password: string
}

interface RegisterRequest {
    accessToken: string
    refreshToken: string
    success: boolean
    user: UserInterface
}


export const register = ({ name, email, password }: RegisterUserRequest, redirect: () => void) => {
    return function (dispatch: Dispatch<ActionUser>) {
        fetch(URL_REGISTR_USER, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ name, email, password })
        }).then(checkResponse)
            .then((res: RegisterRequest) => {
                getTokens(res);
                if (res && res.success) {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        user: res.user
                    });
                    redirect();
                } else {
                    dispatch({
                        type: REGISTER_FAILED,
                        user: {}
                    });
                }
            })
            .catch((e) =>
                dispatch({
                    type: REGISTER_FAILED,
                    user: {}
                })
            );
    };
};




export const getAccessToken = () => {
    const navigate = useNavigate();
    return function (dispatch:Dispatch<ActionUser>) {
      dispatch({ type: TOKEN_REQUEST, user : {} });
      return fetch(URL_AUTH_TOKEN, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ token: localStorage.refreshToken })
      })
        .then(checkResponse)
        .then((res) => {

            const redirect = () => {
                navigate('/login')
            };

          getTokens(res);
          if (res && res.success) {
            dispatch({ 
              type: TOKEN_SUCCESS,
              user:  {}
            });
          } else {
            logout(redirect);
            dispatch({ 
              type: TOKEN_FAILED ,
              user : {}
            });
          }
        })
        .catch((e) => {
          if (e.message === 'Token is invalid') {
            getAccessToken();
          } else dispatch({
            type: TOKEN_FAILED,
            user : {}
          })
        });
    };
  };
