import { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../services/authEtc';
import { useDispatch } from '../../types/dispatch';
import { getCookie } from '../../utils/cookie';

interface ProtectedRouteArs {
  children: ReactElement | JSX.Element; // Что будет в теле модального окна
}

export const ProtectedRoute = ({ children }: ProtectedRouteArs) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const refreshToken = localStorage.refreshToken;

  
  useEffect(() => {
    if (!getCookie('token') || !refreshToken) {
      dispatch(getAccessToken())
      if (!refreshToken) {
        navigate("/login", {state: { from: location.pathname } });
      }
    } 
  }, [dispatch, refreshToken]);

  if (refreshToken) {
    return children
  }
  return null
}