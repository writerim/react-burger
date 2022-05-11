import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../services/authEtc';

interface ProtectedRouteArs {
  children: ReactElement | JSX.Element; // Что будет в теле модального окна
}

export const ProtectedRoute = ({ children }: ProtectedRouteArs) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const refreshToken = localStorage.refreshToken;
  useEffect(() => {
    if (refreshToken) {
      dispatch(getAccessToken());
    } else {
      navigate("/login");
    }
  }, []);

  if (refreshToken) {
    return children
  }
  return null
}