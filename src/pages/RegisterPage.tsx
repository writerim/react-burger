import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login, register } from "../services/authEtc"
import { AppDispatch } from "../types/dispatch"
import styles from "./RegisterPage.module.css"


const RegisterPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  const redirect = () => {
    navigate('/')
  };

  const [form, setValue] = useState({ name: '', email: '', password: '' })
  const onChange = (e: { target: HTMLInputElement }) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  const onNewRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(register(form, redirect));
  }

  return (
    <div className={styles.fixed_center}>
      <form onSubmit={onNewRegister}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <div className="mt-6"><Input type={'text'} placeholder={'Имя'}
          value={form.name} name="name"
          onChange={onChange} /></div>
        <div className="mt-6"><EmailInput onChange={onChange} value={form.email} name="email" /></div>
        <div className="mt-6"><PasswordInput onChange={onChange} value={form.password} name={'password'} /></div>
        <div className="mt-6"><Button type="primary" size="medium">Зарегистрироваться</Button></div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">Уже зарегистрированы?
        <Link to='/login' className={styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default RegisterPage