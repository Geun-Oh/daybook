import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useAuth = () => {
  const AuthRequired = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');

    useEffect(() => {
      if (location.pathname === '/auth') return;

      if (!userId) {
        navigate('/auth', { replace: true });
      }
    }, [location, navigate, userId]);

    return <></>;
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.pathname = '/auth';
  };

  return { logout, AuthRequired };
};

export default useAuth;
