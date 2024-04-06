import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { daybookAtom, tagInputAtom } from '@state/daybook';
import { colors } from '@theme';
import { useAtom } from 'jotai';
import CloseSVG from '@assets/svg/close.svg?react';

import PlusSVG from '@assets/svg/plus.svg?react';
import { useEffect, useState } from 'react';
import getFontStyle from '@theme/font/getFontSize';
import { fadeLeftAnimation } from '@theme/animation';

const defaultTags = [
  '배려',
  '이해',
  '사랑',
  '양보',
  '협동',
  '공감',
  '용기',
  '용서',
  '행복',
  '희망',
] as const;

function 형태() {
  const [daybook, setDaybook] = useAtom(daybookAtom);

  const [customTags, setCustomTags] = useState<string[]>([]);

  const [hasTagInput, setHasTagInput] = useAtom(tagInputAtom);
  const [input, setInput] = useState('');

  const handleChipClick = (tag: string) => {
    setDaybook((prev) => {
      const prevTags = prev.hashtags;
      if (prevTags.includes(tag)) {
        const deleteIndex = prevTags.indexOf(tag);
        prevTags.splice(deleteIndex, 1);
        return {
          ...prev,
          hashtags: prevTags,
        };
      }

      return {
        ...prev,
        hashtags: [...prevTags, tag],
      };
    });
  };

  const handleAddButtonClick = () => {
    setHasTagInput(true);
  };

  const handleRegisterButtonClick = () => {
    if (input.trim().length === 0) return;

    setDaybook((prev) => ({
      ...prev,
      hashtags: [...prev.hashtags, input],
    }));

    setCustomTags((prev) => [...prev, input]);

    setHasTagInput(false);
    setInput('');
  };

  // 초기 진입시, 인풋 초기화
  useEffect(() => {
    setHasTagInput(false);
  }, [setHasTagInput]);

  return (
    <>
      <Wrapper>
        {defaultTags.map((tag) => {
          return (
            <Chip
              key={tag}
              css={css`
                ${daybook.hashtags.includes(tag) &&
                css`
                  color: ${colors.white};
                  background-color: ${colors.primary};
                `}
              `}
              onClick={() => handleChipClick(tag)}
            >
              {tag}
              {daybook.hashtags.includes(tag) && <CloseSVG />}
            </Chip>
          );
        })}
        {customTags.map((tag) => {
          return (
            <Chip
              key={tag}
              css={css`
                ${daybook.hashtags.includes(tag) &&
                css`
                  color: ${colors.white};
                  background-color: ${colors.primary};
                `}
              `}
              onClick={() => handleChipClick(tag)}
            >
              {tag}
              {daybook.hashtags.includes(tag) && <CloseSVG />}
            </Chip>
          );
        })}
        <Chip onClick={handleAddButtonClick}>
          <PlusSVG />
          추가하기
        </Chip>
      </Wrapper>
      {hasTagInput && (
        <FloatingInputWrapper>
          <Input
            autoFocus
            placeholder="추가할 태그를 입력해주세요"
            onChange={(e) => setInput(e.target.value)}
          />
          <AddButton onClick={handleRegisterButtonClick}>등록</AddButton>
        </FloatingInputWrapper>
      )}
    </>
  );
}

export default 형태;

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin-top: 47px;
  opacity: 0;
  ${fadeLeftAnimation};
`;

const Chip = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-grow: 0;
  list-style: none;
  padding: 8px 12px;
  border-radius: 999px;
  color: ${colors.grey40};
  border: 1px solid ${colors.grey30};
  ${getFontStyle('title3')};
`;

const FloatingInputWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0 20px 16px;
  box-sizing: border-box;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 16px;
  color: ${colors.grey70};
  outline: none;
  border: 1px solid #dddddd;
  ::placeholder {
    color: ${colors.grey30};
  }
`;

const AddButton = styled.button`
  all: unset;
  position: absolute;
  top: 12px;
  right: 40px;
  padding: 4px 12px;
  color: ${colors.white};
  background-color: ${colors.primary};
  ${getFontStyle('title3')};
`;
