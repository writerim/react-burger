import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../services/authEtc';
import { ActionUser } from '../../services/reducers/authEtc';

interface ProtectedRouteArs {
  children: JSX.Element | JSX.Element[]; // Что будет в теле модального окна
}

export const ProtectedRoute = ({ children }: ProtectedRouteArs) :JSX.Element=> {
  const dispatch = useDispatch();
  const refreshToken = localStorage.refreshToken;

  useEffect(() => {
    if (refreshToken) {
      dispatch(getAccessToken());
    }
  }, [dispatch, refreshToken]);

  const navigate = useNavigate();
  if (!refreshToken) {
    navigate('/login')
    return null
  }

  return children
}