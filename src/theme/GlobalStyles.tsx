import { Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { css } from '@emotion/react';
import { colors } from './colors';

function GlobalStyles() {
  const globalStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');

    ${emotionNormalize};

    html,
    body {
      font-family: 'Nanum Myeongjo', serif;
      font-weight: 700;

      background-image: url('/src/assets/images/background.png');
      background-size: cover;
      overflow: hidden;
    }

    p {
      margin: 0;
    }

    img {
      user-select: none;
      // https://caniuse.com/webkit-user-drag
      -webkit-user-drag: none;
    }

    a {
      text-decoration: none;
    }

    [type='radio'] {
      accent-color: ${colors.primary};
    }

    *,
    :before,
    :after {
      box-sizing: border-box;
      // 모바일 환경에서 요소 클릭시 '파란색' 클릭 영역 표시 제거
      -webkit-tap-highlight-color: transparent;
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalStyles;
