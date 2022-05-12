import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/authEtc"
import { RootState } from "../services/reducers"
import styles from "./LoginPage.module.css"


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/')
  };

  const { email, password } = useSelector((store: RootState) => store.auth);

  const [form, setValue] = useState({ email: email ?? '' , password : password ?? '' })
  const onChange = (e:{target: HTMLInputElement}) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  const onLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email: form.email, password: form.password }, redirect));
  }

  return (
    <div className={styles.fixed_center}>
      <form onSubmit={onLogin}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <div className="mt-6"><EmailInput onChange={onChange} value={form.email} name="email" /></div>
        <div className="mt-6"><PasswordInput onChange={onChange} value={form.password} name={'password'} /></div>
        <div className={`mt-6 ${styles.center}`}>
          <Button type="primary" size="medium">Войти</Button>
        </div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-20">
        Вы — новый пользователь?
        <Link to='/register' className={styles.link}>Зарегистрироваться</Link>
      </div>
      <div className="text text_type_main-small text_color_inactive mt-4">Забыли пароль?
        <Link to='/forgot-password' className={styles.link}>Восстановить пароль</Link>
      </div>
    </div>
  )
}

export default LoginPage