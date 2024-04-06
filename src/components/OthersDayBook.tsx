import styled from "@emotion/styled";
import Header from "./Header";
import Card from "./Card";
import OthersWritingFooter from "./OthersDayBookFooter";
import { fadeLeftDelayAnimation } from "@theme/animation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetDaybookResponse } from "@api/response";
import { getDaybook } from "@api";
import LoadingSpinner from "./LoadingSpinner";

const OthersWriting = () => {
  const { id } = useParams();

  const [daybookData, setDaybookData] = useState<GetDaybookResponse | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  const getData = async (id: string) => {
    setIsLoading(true);

    try {
      const res = await getDaybook(id);
      if (!res || !res.data) return;
      setDaybookData(res.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    getData(id);
  }, [id]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Header>
        <Header.Button variety="back" />
        다른 사람 일지
      </Header>
      <Wrapper>
        {daybookData && <Card isDetail daybook={daybookData} />}
      </Wrapper>
      <OthersWritingFooter />
    </>
  );
};

export default OthersWriting;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${fadeLeftDelayAnimation};
`;
