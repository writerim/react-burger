import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu"
import { getAccessToken, getAuth, login, updateAuth } from "../services/authEtc";
import { RootState } from "../services/reducers";
import { AppDispatch } from "../types/dispatch";
import styles from "./ProfilePage.module.css"

const ProfilePage = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { email, name } = useSelector((store: RootState) => store.auth);
  const [isChanged, setIsChanged] = useState(false);

  const [form, setValue] = useState({
    email: email ?? '',
    password: '',
    name: name ?? '',
  })


  const onChange = (e: { target: HTMLInputElement }) => {
    setValue({ ...form, [e.target.name]: e.target.value })
    setIsChanged(
      email !== form.email ||
      name !== form.name
    )
  }

  const cancelForm = (e: SyntheticEvent) => {
    e.preventDefault();
    setValue({ name: name, email: email, password: '' });
  }

  const onSave = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateAuth(form));
  }


  useEffect(
    () => {
      dispatch(getAccessToken());
    },
    [dispatch]
  );

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
          <form onSubmit={onSave}>
            <div className="mt-6">
              <Input type={'text'} placeholder={'Имя'}
                onChange={onChange} icon={'CurrencyIcon'} value={form.name}
                name="name" />
            </div>
            <div className="mt-6">
              <EmailInput onChange={onChange} value={form.email} name="email" />
            </div>
            <div className="mt-6">
              <PasswordInput onChange={onChange} value={form.password} name={'password'} />
            </div>
            {isChanged &&
              <div className={styles.buttons + ' mt-6'}>
                <button className={styles.cancel + ' text text_type_main-default pl-2 pr-2 mr-5'} onClick={cancelForm}>
                  Отмена
                </button>
                <Button type="primary" size="medium">Сохранить</Button>
              </div>
            }
          </form>
        </section>
      </div>
    </main>
  )
}

export default ProfilePage