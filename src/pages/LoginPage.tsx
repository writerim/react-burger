import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useState } from "react"
import { Link, useLocation, useNavigate, useNavigationType } from "react-router-dom"
import { login } from "../services/authEtc"
import { useDispatch } from "../types/dispatch"
import { useSelector } from "../types/selector"
import styles from "./LoginPage.module.css"

interface Pathname {
    from : unknown
}


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { from } = location.state as any || location.pathname ||"/"
  const { isLoggedIn } = useSelector(store => store.auth);

  const redirect = () => {
    if(!from){
      navigate('/profile')
    }
    if(isLoggedIn) navigate(from)
  };

  const { email, password } = useSelector(store => store.auth);

  const [form, setValue] = useState({ email: email ?? '' , password : password ?? '' })
  const onChange = (e:{target: HTMLInputElement}) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  const onLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email: form.email, password: form.password }, redirect))
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