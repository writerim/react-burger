import { NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch } from "../types/dispatch";
import { UserInterface } from "../interfaces/userInterface";
import { checkResponse } from "../utils/api";
import { deleteCookie, getCookie, getTokens } from "../utils/cookie";
import { FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS, TOKEN_FAILED, TOKEN_REQUEST, TOKEN_SUCCESS, USER_FAILED, USER_REQUEST, USER_SUCCESS, USER_UPDATE_REQUEST } from "./actions/authEtc";
import { URL_AUTH_TOKEN, URL_AUTH_USER, URL_FORGOT_PASSWORD, URL_LOGIN_USER, URL_LOGOUT_USER, URL_REGISTR_USER, URL_RESET_PASSWORD } from "./consts";




export const getAuth = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_REQUEST,
            user: {}
        });
        return fetch(URL_AUTH_USER, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`,
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
            .then(checkResponse)
            .then((res) => {
                console.log(res)
                if (res && res.success) {
                    dispatch({
                        type: USER_SUCCESS,
                        user: res.user
                    });
                    return res;
                } else {
                    dispatch({
                        type: USER_FAILED,
                        user: {}
                    });
                }
            })
            .catch((e) => {
                const navigate = useNavigate();
                const redirect = () => {
                    navigate('/login')
                };
                logout(redirect);
                dispatch({
                    type: USER_FAILED,
                    user: {}
                })
            });
    };
};

export interface ForgotPasswordInterface {
    email: string
}


export const forgotPassword = ({ email }: ForgotPasswordInterface, redirect: () => void) => {
    return async function (dispatch: AppDispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
            user: {}
        });
        await fetch(URL_FORGOT_PASSWORD, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email: email })
        })
            .then(checkResponse)
            .then(req => {
                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    user: {}
                });
                redirect();
            })
            .catch(e => {
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    user: {}
                })
            })
    }

};


interface ResetPasswordInterface {
    token: string
    password: string
}

export const resetPassword = ({ token, password }: ResetPasswordInterface, redirect: () => void) => {
    return async function (dispatch: AppDispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
            user: {}
        });
        await fetch(URL_RESET_PASSWORD, {
            body: JSON.stringify({ token, password }),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: FORGOT_PASSWORD_SUCCESS,
                        user: {}
                    });
                    redirect();
                } else {
                    dispatch({
                        type: FORGOT_PASSWORD_FAILED,
                        user: {}
                    });
                }
            })
            .catch(e => {
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    user: {}
                })
            })
    }

};

interface LoginUserRequest {
    email: string
    password: string
}


export const login = ({ email, password }: LoginUserRequest, redirect: () => void) => {
    return function (dispatch: AppDispatch) {
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
                        user: {}
                    });
                }
            })
            .catch((e) => {
                dispatch({
                    type: LOGIN_FAILED,
                    user: {}
                });
            });
    };
};



export const logout = (redirect: NavigateFunction) => {
    if (!localStorage.refreshToken) {
        redirect("/")
    }
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOGOUT_REQUEST,
            user: {}
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
                        user: {}
                    });
                    redirect("/");
                } else {
                    dispatch({
                        type: LOGOUT_FAILED,
                        user: {}
                    });
                }
            })
            .catch(() =>
                dispatch({
                    type: LOGOUT_FAILED,
                    user: {}
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
    return function (dispatch: AppDispatch) {
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



// Обновление токена
export const getAccessToken = () => {
    return async function (dispatch: AppDispatch) {
        dispatch({ type: TOKEN_REQUEST, user: {} });
        return await fetch(URL_AUTH_TOKEN, {
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

                const navigate = useNavigate();

                const redirect = () => {
                    navigate('/login')
                };

                getTokens(res);
                if (res && res.success) {
                    dispatch({
                        type: TOKEN_SUCCESS,
                        user: {}
                    });
                } else {
                    logout(redirect);
                    dispatch({
                        type: TOKEN_FAILED,
                        user: {}
                    });
                }
                return res
            })
            .catch((e) => {
                if (e.message === 'Token is invalid') {
                    getAccessToken();
                } else {
                    dispatch({
                        type: TOKEN_FAILED,
                        user: {}
                    })
                }
            });
    };
};




export const updateAuth = (form: { name: string, email: string, password: string }) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_UPDATE_REQUEST,
            user: {}
        });
        fetch(URL_AUTH_USER, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(form)
        })
            .then(checkResponse)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: USER_SUCCESS,
                        user: res.user
                    });
                } else {
                    dispatch({
                        type: USER_FAILED,
                        user: {}
                    });
                }
            })
            .catch((e) => {
                if ((e.message === 'jwt expired') || (e.message === 'Token is invalid')) {
                    getAccessToken()
                } else dispatch({
                    type: USER_FAILED,
                    user: {}
                })
            });
    };
};
