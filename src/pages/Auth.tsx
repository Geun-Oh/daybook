import { useEffect, useState } from 'react';
import PreLogin from './auth/PreLogin';
import PostLogin from './auth/PostLogin';

export type LandingFunnelStateProps = 'pre-login' | 'post-login';

const Auth = () => {
  const [landingFunnelState, setLandingFunnelState] =
    useState<LandingFunnelStateProps>('pre-login');

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;
    setLandingFunnelState('post-login');
  }, [userId]);

  if (landingFunnelState === 'post-login') {
    return <PostLogin />;
  }

  return <PreLogin setLandingFunnelState={setLandingFunnelState} />;
};

export default Auth;
