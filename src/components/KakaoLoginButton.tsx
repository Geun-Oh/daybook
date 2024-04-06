import { css } from '@emotion/react';
import KakaoIcon from '@assets/svg/kakao_icon.svg?react';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import client from '@api/client';
import { useSearchParams } from 'react-router-dom';
import { userState } from '@state/user';
import { LandingFunnelStateProps } from '@pages/Auth';

const KAKAO_LOGIN_URL =
  'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' +
  '438d6de445dd4c2a8c586267854e887c' +
  '&redirect_uri=' +
  `${import.meta.env.NODE_ENV === 'development' ? "http://localhost:5173" : "https://daybook.site"}/auth` +
  '&scope=';

const login = async (code: string, setUserId: (id: number) => void) => {
  const res = await client.post('/auth/kakao', {
    code,
  });

  if (!res || !res.data) return null;

  setUserId(res.data.data.memberId);

  localStorage.setItem('userId', res.data.data.memberId);

  console.log('user: ', res.data.data.memberId);

  localStorage.setItem('accessToken', res.data.data.accessToken);
  localStorage.setItem('refreshToken', res.data.data.refreshToken);
  return res;
};

export interface KakaoLoginButtonProps {
  setLandingFunnelState: Dispatch<SetStateAction<LandingFunnelStateProps>>;
}

const KakaoLoginButton: FC<KakaoLoginButtonProps> = ({
  setLandingFunnelState,
}) => {
  const [, setUserId] = useAtom(userState);

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const userId = useAtomValue(userState);

  useEffect(() => {
    if (userId) {
      setLandingFunnelState('post-login');
      return;
    }

    if (!code || code.length < 1) return;
    login(code, setUserId);
  }, [code, setLandingFunnelState, setUserId, userId]);

  const loginWithkakao = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <div
      css={css`
        width: calc(100% - 32px);
        height: 56px;
        background-color: #fee500;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        position: absolute;
        bottom: 50px;
      `}
      onClick={loginWithkakao}
    >
      <KakaoIcon />
      카카오 로그인
    </div>
  );
};

export default KakaoLoginButton;
