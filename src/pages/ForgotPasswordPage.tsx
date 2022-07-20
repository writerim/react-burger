import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { forgotPassword } from "../services/authEtc";
import { useDispatch } from "../types/dispatch";
import styles from "./ForgotPasswordPage.module.css"

const ForgotPasswordPage = () => {

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate()

  const [form, setValue] = useState({ email: '' })
  const onChange = (e: { target: HTMLInputElement }) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  const onForgot = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const redirect = () => {
      navigate('/reset-password', {state : {from : location.pathname}})
    };
    forgotPassword({ email: form.email }, redirect)
  };

  if (localStorage.refreshToken) {
    navigate('/');
  }

  return (
    <div className={styles.fixed_center}>
      <form onSubmit={onForgot}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <div className="mt-6"><EmailInput onChange={onChange} value={form.email} name="email" /></div>
        <div className="mt-6">
          <Button type="primary" size="medium">Восстановить</Button>
        </div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">Вспомнили пароль?
        <Link to='/login' className={styles.link}>Войти</Link></div>
    </div>
  )
}

export default ForgotPasswordPage