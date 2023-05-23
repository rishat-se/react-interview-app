import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

type ProtectedRouteProps = {
  redirectTo: string;
  children: ReactNode;
};

export default function ProtectedRoute({ redirectTo, children }: ProtectedRouteProps) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  if (isAuth) {
    return <>{children}</>;
  } else {
    return <Navigate replace to={redirectTo} />;
  }
}
