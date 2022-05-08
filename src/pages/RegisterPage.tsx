import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link } from "react-router-dom"
import styles from "./RegisterPage.module.css"


const RegisterPage = () => {

  const onChangeName = () => {

  }

  const onChangeEmail = () => {

  }

  const onChangePassword = () => {

  }

  return (
    <div className={styles.fixed_center}>
      <form>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <div className="mt-6"><Input type={'text'} placeholder={'Имя'}
          value={''} name="name"
          onChange={onChangeName} /></div>
        <div className="mt-6"><EmailInput onChange={onChangeEmail} value={''} name="email" /></div>
        <div className="mt-6"><PasswordInput onChange={onChangePassword} value={''} name={'password'} /></div>
        <div className="mt-6"><Button type="primary" size="medium">Зарегистрироваться</Button></div>
      </form>
      <div className="text text_type_main-small text_color_inactive mt-4">Уже зарегистрированы?
        <Link to='/login' className={styles.link}>Войти</Link>
      </div>
    </div>
  )
}

export default RegisterPage