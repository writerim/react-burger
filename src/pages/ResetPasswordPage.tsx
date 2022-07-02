import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { resetPassword } from "../services/authEtc"
import { AppDispatch } from "../types/dispatch"
import styles from "./ResetPasswordPage.module.css"


const ResetPasswordPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setValue] = useState({ token: '', password: '' })
  const onChange = (e: { target: HTMLInputElement }) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  const redirect = () => {
    navigate('/')
  };

  const onClickForm = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetPassword(form,redirect))
  };

  return (
    <div className={styles.fixed_center}>
      <form onSubmit={onClickForm}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <div className="mt-6">
          <PasswordInput onChange={onChange} value={form.password} name={'password'} />
        </div>
        <div className="mt-6">
          <Input type={'text'} placeholder={'Введите код из письма'}
            onChange={onChange} value={form.token} name="token"/>
        </div>
        <div className="mt-6"><Button type="primary" size="medium">Сохранить</Button></div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">
        Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default ResetPasswordPage