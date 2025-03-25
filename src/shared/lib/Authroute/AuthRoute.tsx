import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthRoute = () => {
  const token = Cookies.get('authToken');
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
