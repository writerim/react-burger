import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { forgotPassword } from "../services/authEtc";
import styles from "./ForgotPasswordPage.module.css"

const ForgotPasswordPage = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('')


  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget){
      setEmail(e.currentTarget.value)
    }
  }

  const onClickForgot = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(forgotPassword({email}))
  };

  return (
    <div className={styles.fixed_center}>
      <form>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <div className="mt-6"><EmailInput onChange={onChangeEmail} value={email} name="email" /></div>
        <div className="mt-6">
          <Button type="primary" size="medium"
            onClick={onClickForgot}>Восстановить</Button>
        </div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">Вспомнили пароль?
        <Link to='/login' className={styles.link}>Войти</Link></div>
    </div>
  )
}

export default ForgotPasswordPage