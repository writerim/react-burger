import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { resetPassword } from "../services/authEtc"
import styles from "./ResetPasswordPage.module.css"


const ResetPasswordPage = () => {

  const dispatch = useDispatch();


  const [password , setPassword] = useState('')
  const [token , setToken] = useState('')

  const onChangePassword = (e : React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget){
      setPassword(e.currentTarget.value)
    }
  }
  
  const onChangeToken = (e:  React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget){
      setToken(e.currentTarget.value)
    }
  }

  const onClickForm = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(resetPassword({token, password}))
  };

  return (
    <div className={styles.fixed_center}>
      <form>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <div className="mt-6">
          <PasswordInput onChange={onChangePassword} value={password} name={'password'} />
        </div>
        <div className="mt-6">
          <Input type={'text'} placeholder={'Введите код из письма'}
            onChange={onChangeToken} value={token} name="token"/>
        </div>
        <div className="mt-6"><Button type="primary" size="medium" onClick={onClickForm}>Сохранить</Button></div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">
        Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default ResetPasswordPage