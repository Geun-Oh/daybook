import KakaoLoginButton, { KakaoLoginButtonProps } from '@components/KakaoLoginButton';
import { css } from '@emotion/react';
import { FC } from 'react';

interface PreLoginTemplateProps extends KakaoLoginButtonProps { }

const PreLogin: FC<PreLoginTemplateProps> = ({ setLandingFunnelState }) => {
    return (
        <div css={css`
            padding-left: 16px;
            padding-right: 16px;
            height: 100vh;
            position: relative;

            background-image: url('/src/assets/images/background_landing.png');
            background-size: cover;
        `}>
            <section css={css`
                padding-top: 20vh;
                padding-left: 20%;
                padding-right: 20%;
                @media screen and (max-width: 480px) {
                    padding-left: 10px;
                    padding-right: 10px;
                }
            `}>
                <img src="/src/assets/images/kakao_landing.png" alt="kakao login background" width={"100%"} />
            </section>
            <KakaoLoginButton setLandingFunnelState={setLandingFunnelState} />
        </div>
    );
};

export default PreLogin;