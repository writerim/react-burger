import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import ProfilePage from '../../pages/ProfilePage';
import IngredientsByIdPage from '../../pages/IngredientsByIdPage';
import Home from '../../pages/Home';
import { ProtectedRoute } from '../Protected/Protected';
import { ProfileOrderByPage } from '../../pages/ProfileOrderByPage';
import { useDispatch } from 'react-redux';
import { getIngredientsData } from '../../services/ingredients';
import { useEffect } from 'react';
import { TestPermission } from '../../pages/TestPermission';
import FeedDetails from '../Feed/Detail';
import Modal from '../Modal/Modal';
import { ProfileOrdersPage } from '../../pages/ProfileOrdersPage';

function App() {

  const dispatch = useDispatch()
  const returnFromModal = () => {
    console.log(111);
  };

  useEffect(() => {
    dispatch(getIngredientsData())
  }, [])

  return (
    <div className={styles.Container}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/ingredients/:id" element={
            <IngredientsByIdPage />
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/feed/:id" element={
            <ProtectedRoute>
              <Modal title="sds" setShow={returnFromModal}>
                <FeedDetails isProfile={false}  />
              </Modal>
            </ProtectedRoute>
          } />
          <Route path="/profile/orders" element={
            <ProtectedRoute>
              <ProfileOrdersPage />
            </ProtectedRoute>
          } />
          <Route path="/profile/orders/:id" element={
            <ProtectedRoute>
              <ProfileOrderByPage />
            </ProtectedRoute>
          } />
          <Route path="/test_permission" element={
            <ProtectedRoute>
              <TestPermission />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
