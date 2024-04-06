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
import { getDaybookList } from "@api";
import { GetDaybookResponse } from "@api/response";
import LoadingSpinner from "./LoadingSpinner";

const MyWritingSwiper = () => {
  const [data, setData] = useState<GetDaybookResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const { data } = await getDaybookList();
      setData(data);

      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
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
        {data?.map((daybook, i) => (
          <CardSlide key={i}>
            <Card isCurrent={currentIndex === i} daybook={daybook} />
          </CardSlide>
        ))}
        <SwiperFooter maxIndex={data?.length} currentIndex={currentIndex} />
      </Swiper>
    </>
  );
};

export default MyWritingSwiper;

const CardSlide = styled(SwiperSlide)`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
