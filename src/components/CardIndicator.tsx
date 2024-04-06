import styled from '@emotion/styled';
import { colors } from '@theme';
import { FC, useCallback } from 'react';
import { css } from '@emotion/react';

export interface CardIndicatorProps {
    maxIndex: number;
    currentIndex: number;
}

const CardIndicator: FC<CardIndicatorProps> = ({ maxIndex, currentIndex }) => {

    const getArr = useCallback(() => {
        const indexArr = []

        for (let i = 0; i < maxIndex; i++) {
            indexArr.push(0);
        }

        return indexArr;
    }, [maxIndex]);

    const idxArr = getArr();

    return <Wrapper>
        {idxArr.map((_, i) => {
            return <Dot key={i} css={css`
                opacity: ${i === currentIndex ? 1 : 0.3};
            `} />
        })}
    </Wrapper>
};

export default CardIndicator;

const Wrapper = styled.div`
    width: auto;
    height: 24px;
    border-radius: 12px;
    background-color: ${colors.grey20};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 4px;

    padding-left: 8px;
    padding-right: 8px;
`

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${colors.grey50};
`