import { css } from '@emotion/react';
import { media } from '@theme/media';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;

        ${media.tablet} {
          max-width: 768px;
          left: calc(50% - 384px);
        }
      `}
    >
      {children}
    </div>
  );
}

export default Layout;
