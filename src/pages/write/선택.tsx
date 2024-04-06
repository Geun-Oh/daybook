import { css } from '@emotion/react';
import { paperTypeState } from '@state/paperType';
import { useAtom } from 'jotai';
import monumPaper from '@assets/images/monun_example.png';
import monumPaperSelected from '@assets/images/monun_example_selected.png';
import lineNotePaper from '@assets/images/linenote_example.png';
import lineNotePaperSelected from '@assets/images/linenote_example_selected.png';
import getFontStyle from '@theme/font/getFontSize';
import { colors } from '@theme';
import { fadeLeftDelayAnimation } from '@theme/animation';

const 선택 = () => {
  const [paperTypeAtom, setPaperTypeAtom] = useAtom(paperTypeState);

  return (
    <div
      css={css`
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: scroll;
        opacity: 0;
        ${fadeLeftDelayAnimation}
      `}
    >
      <label
        htmlFor="모눈종이"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
        `}
        onClick={() => setPaperTypeAtom('모눈종이')}
      >
        <img
          css={css`
            width: 100%;
          `}
          src={paperTypeAtom === '모눈종이' ? monumPaperSelected : monumPaper}
          alt="모눈종이 선택지"
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            ${getFontStyle('title3')};
            ${paperTypeAtom === '모눈종이'
              ? css`
                  color: ${colors.primaryDark};
                `
              : css`
                  color: ${colors.grey40};
                `}
          `}
        >
          <input
            type="radio"
            value={'모눈종이'}
            name="papertype"
            id="모눈종이"
          />
          모눈종이
        </div>
      </label>
      <label
        htmlFor="줄노트"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
        `}
        onClick={() => setPaperTypeAtom('줄노트')}
      >
        <img
          css={css`
            width: 100%;
          `}
          src={
            paperTypeAtom === '줄노트' ? lineNotePaperSelected : lineNotePaper
          }
          alt="줄노트 선택지"
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            ${getFontStyle('title3')};
            ${paperTypeAtom === '줄노트'
              ? css`
                  color: ${colors.primaryDark};
                `
              : css`
                  color: ${colors.grey40};
                `}
          `}
        >
          <input type="radio" value={'줄노트'} name="papertype" id="줄노트" />
          줄노트
        </div>
      </label>
    </div>
  );
};

export default 선택;
