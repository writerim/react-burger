import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { register } from "../services/authEtc"
import styles from "./RegisterPage.module.css"


const RegisterPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = () => {
    navigate('/')
  };

  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.currentTarget.value)
  }
  
  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.currentTarget.value)
  }
  
  const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.currentTarget.value)
  }

  const onNewRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(register({name, email, password}, redirect));
  }

  return (
    <div className={styles.fixed_center}>
      <form>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <div className="mt-6"><Input type={'text'} placeholder={'Имя'}
          value={name} name="name"
          onChange={onChangeName} /></div>
        <div className="mt-6"><EmailInput onChange={onChangeEmail} value={email} name="email" /></div>
        <div className="mt-6"><PasswordInput onChange={onChangePassword} value={password} name={'password'} /></div>
        <div className="mt-6"><Button type="primary" size="medium" onClick={onNewRegister}>Зарегистрироваться</Button></div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">Уже зарегистрированы?
        <Link to='/login' className={styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default RegisterPage