import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCards, Pagination } from 'swiper/modules';


const TestSwiper = () => {
  return (
    <Swiper
      css={css`
      width: 100%;
    `}
      effect={'cards'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.2}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 500,
        modifier: 2,
        slideShadows: true,
      }}
      pagination={false}
      modules={[EffectCards, Pagination]}
      className="mySwiper"
    >
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </StyledSlide>
      <StyledSlide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </StyledSlide>
    </Swiper>
  )
}

export default TestSwiper;

const StyledSlide = styled(SwiperSlide)`
    background-position: center;
    background-size: cover;
    width: auto;
    img {
      display: block;
      width: 100%;
    } 
`