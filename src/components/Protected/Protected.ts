import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../services/authEtc';
import { AppDispatch } from '../../types/dispatch';

interface ProtectedRouteArs {
  children: ReactElement | JSX.Element; // Что будет в теле модального окна
}

export const ProtectedRoute = ({ children }: ProtectedRouteArs) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const refreshToken = localStorage.refreshToken;

  useEffect(() => {
    if (refreshToken) {
      dispatch(getAccessToken());
    } else {
      navigate("/login", {state: { from: location.pathname } });
    }
  }, [dispatch, refreshToken]);

  if (refreshToken) {
    return children
  }
  return null
}