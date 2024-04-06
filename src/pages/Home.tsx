import styled from '@emotion/styled';
import { css } from '@emotion/react'
import getFontStyle from '@theme/font/getFontSize';
import Header from '@components/Header';
import HomeSwiper from '@components/HomeSwiper';
import HumanSVG from "@assets/svg/human.svg?react";
import AddIconSVG from "@assets/svg/ico_add.svg?react";
import { colors } from '@theme';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Wrapper>
            <Header>
                <img src="/src/assets/images/home_header.png" alt='home_header' width={"160px"} />
            </Header>
            <p
                css={css`
                margin-left: 16px;
                margin-top: 20px;
            white-space: pre-wrap;
            ${getFontStyle('header1')}
          `}
            >
                {`현재 3명의` + '\n' + '일지를 볼 수 있어요'}
            </p>

            <HomeSwiper />

            <Footer css={css`
                margin-left: 16px;
                margin-right: 16px;
            `}>
                <Link to={'/my'}>
                    <button>
                        <HumanSVG />
                        내 일지보기
                    </button>
                </Link>
                <Link to={'/write'}>
                    <button css={css`
                    background-color: ${colors.primaryDark};
                    border: none;
                    color: white;
                `}>
                        <AddIconSVG />
                        일지작성
                    </button>
                </Link>
            </Footer>
        </Wrapper>
    );
};

export default Home;


const Wrapper = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100vh;
`

const Footer = styled.footer`
    width: calc(100% - 32px);
    position: absolute;
    bottom: 0;
    max-width: 768px;
    height: 100px;

    display: flex;
    justify-content: center;
    gap: 8px;

    button {
        width: 171px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    a {
        text-decoration: none;
    }
`