import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import ProfilePage from '../../pages/ProfilePage';
import IngredientsByIdPage from '../../pages/IngredientsByIdPage';
import Home from '../../pages/Home';
import { ProtectedRoute } from '../Protected/Protected';



function App() {
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
            <ProtectedRoute>
              <IngredientsByIdPage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
