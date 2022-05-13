import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAccessToken, getAuth } from '../../services/authEtc';
import { RootState } from '../../services/reducers';

interface ProtectedRouteArs {
  children: ReactElement | JSX.Element; // Что будет в теле модального окна
}

export const ProtectedRoute = ({ children }: ProtectedRouteArs) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const refreshToken = localStorage.getItem('refreshToken');
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