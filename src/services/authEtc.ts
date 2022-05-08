import { Dispatch } from "react";
import { Action } from "redux";
import { checkResponse } from "../utils/api";
import { FORGOT_PASSWORD } from "./actions/authEtc";
import { URL_FORGOT_PASSWORD, URL_RESET_PASSWORD } from "./consts";

interface ForgotPasswordInterface {
    email : string
}

interface ResetPasswordInterface {
    token : string
    password : string
}

export const forgotPassword = ({email}:ForgotPasswordInterface) => {
    return async function (dispath: Dispatch<Action>) {
        await fetch(URL_FORGOT_PASSWORD,{
            body : JSON.stringify({email : email}),
            method : "POST",
            headers : {
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

export const resetPassword = ({token,password}:ResetPasswordInterface) => {
    return async function (dispath: Dispatch<Action>) {
        await fetch(URL_RESET_PASSWORD,{
            body : JSON.stringify({token,password}),
            method : "POST",
            headers : {
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