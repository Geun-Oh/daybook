import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Card from "./Card";
import SwiperFooter from "./SwiperFooter";
import { useEffect, useState } from "react";
import { GetDaybookResponse } from "@api/response";
import { getRandomDaybooks } from "@api";
import LoadingSpinner from "./LoadingSpinner";

const HomeSwiper = () => {
  const [data, setData] = useState<GetDaybookResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const { data } = await getRandomDaybooks();
      setData(data);
    })();
  }, []);

  if (!data?.length) return <LoadingSpinner />;

  return (
    <>
      <Swiper
        css={css`
          margin-top: 30px;
          width: 100%;
        `}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.08}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {data?.map((x, i) => (
          <CardSlide key={i}>
            <Card isHome isCurrent={i === currentIndex} daybook={x} />
          </CardSlide>
        ))}
        <SwiperFooter maxIndex={data?.length} currentIndex={currentIndex} />
      </Swiper>
    </>
  );
};

export default HomeSwiper;

const CardSlide = styled(SwiperSlide)`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
