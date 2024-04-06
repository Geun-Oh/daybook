import Header from "@components/Header";
import Button from "@components/Button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useStep, { STEP, StepContent, StepContentMap } from "@hooks/useStep";
import getFontStyle from "@theme/font/getFontSize";
import 쓰기 from "@pages/write/쓰기";
import 완료 from "@pages/write/완료";
import 탄생 from "@pages/write/탄생";
import 형태 from "@pages/write/형태";
import 선택 from "@pages/write/선택";
import { useAtom, useAtomValue } from "jotai";
import { daybookAtom, tagInputAtom } from "@state/daybook";
import { useEffect } from "react";
import { RESET } from "jotai/utils";
import { fadeLeftAnimation } from "@theme/animation";
import { useSearchParams } from "react-router-dom";
import { paperTypeState } from "@state/paperType";
import LoadingSpinner from "@components/LoadingSpinner";

const STEP_COMPONENTS = {
  [STEP.선택]: 선택,
  [STEP.쓰기]: 쓰기,
  [STEP.탄생]: 탄생,
  [STEP.형태]: 형태,
  [STEP.완료]: 완료,
};

function Write() {
  const { isLoading, step, nextStep, previousStep } = useStep();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("from");

  const StepComponent = STEP_COMPONENTS[step];
  const { title, description, buttonText } = StepContentMap.get(
    step
  ) as StepContent;

  const paperTypeAtom = useAtomValue(paperTypeState);
  const [daybook, setDaybook] = useAtom(daybookAtom);
  const hasTagInput = useAtomValue(tagInputAtom);

  const buttonDisableHandler = () => {
    if (!paperTypeAtom) return true;
    if (step === "쓰기" && daybook.content.trim().length === 0) return true;
    if (step === "탄생" && daybook.category.length === 0) return true;
    if (step === "형태" && daybook.hashtags.length === 0) return true;
    return false;
  };

  useEffect(() => {
    setDaybook(RESET);
  }, [setDaybook]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Header title="일지 작성하기">
        {step !== "완료" && (
          <Header.Button variety="back" onClick={previousStep} />
        )}
      </Header>
      <Wrapper>
        <p
          css={css`
            white-space: pre-wrap;
            ${getFontStyle("header1")}
            ${fadeLeftAnimation}
          `}
        >
          {step === "완료" && query === "new"
            ? "축하합니다!\n첫 일지 기록을 완료하였습니다"
            : title}
        </p>
        <p
          css={css`
            white-space: pre-wrap;
            margin-top: 9px;
            ${getFontStyle("title4")}
            ${fadeLeftAnimation}
          `}
        >
          {description}
        </p>
        <StepComponent />
      </Wrapper>
      {!hasTagInput && (
        <FloatingButtonWrapper>
          <Button onClick={nextStep} disabled={buttonDisableHandler()}>
            {buttonText}
          </Button>
        </FloatingButtonWrapper>
      )}
    </>
  );
}

export default Write;

const Wrapper = styled.div`
  padding: 24px 20px;
`;

const FloatingButtonWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 8px 20px 16px;
  box-sizing: border-box;
`;
