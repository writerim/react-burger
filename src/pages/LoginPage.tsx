import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link } from "react-router-dom"
import styles from "./LoginPage.module.css"


const LoginPage = () => {

  const onChangeEmail = () => {
    
  }

  const onChangePassword = () => {

  }

  return (
    <div className={styles.fixed_center}>
      <form >
        <h1 className="text text_type_main-medium">Вход</h1>
        <div className="mt-6"><EmailInput onChange={onChangeEmail} value='' name="email" /></div>
        <div className="mt-6"><PasswordInput onChange={onChangePassword} value='' name={'password'} /></div>
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