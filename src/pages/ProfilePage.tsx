import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu"
import styles from "./ProfilePage.module.css"

const ProfilePage = () => {

  const onChangeName = () => { }
  const onChangeEmail = () => { }
  const onChangePassword = () => { }
  const cancelForm = () => { }

  return (
    <main>
      <div className={styles.conteiner}>
        <section className={styles.menu}>
          <ProfileMenu />
          <p className={' text text_type_main-default text_color_inactive mt-20'}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </section>
        <section>
          <form>
            <div className="mt-6">
              <Input type={'text'} placeholder={'Имя'}
                onChange={onChangeName} icon={'CurrencyIcon'} value={''}
                name="name" />
            </div>
            <div className="mt-6">
              <EmailInput onChange={onChangeEmail} value={''} name="email" />
            </div>
            <div className="mt-6">
              <PasswordInput onChange={onChangePassword} value={''} name={'password'} />
            </div>
            <div className={styles.buttons + ' mt-6'}>
              <button className={styles.cancel + ' text text_type_main-default pl-2 pr-2 mr-5'} onClick={cancelForm}>
                Отмена
              </button>
              <Button type="primary" size="medium">Сохранить</Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ProfilePage