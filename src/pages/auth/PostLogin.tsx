import Button from '@components/Button';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background_landing.png';

const PostLogin = () => {
  return (
    <div
      css={css`
        padding-left: 16px;
        padding-right: 16px;
        height: 100vh;
        position: relative;

        background-image: url(${background});
        background-size: cover;
      `}
    >
      <section
        css={css`
          padding-top: 20vh;
          padding-left: 20%;
          padding-right: 20%;
          @media screen and (max-width: 480px) {
            padding-left: 10px;
            padding-right: 10px;
          }
        `}
      >
        <img
          src="/src/assets/images/kakao_landing_after.png"
          alt="kakao login complete background"
          width={'100%'}
        />
      </section>
      <div
        css={css`
          width: calc(100% - 32px);
          position: absolute;
          bottom: 50px;
        `}
      >
        <Link to={'/write?from=new'}>
          <Button>시작하기</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostLogin;
