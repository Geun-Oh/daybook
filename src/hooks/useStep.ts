import { postDaybook } from '@api';
import { daybookAtom } from '@state/daybook';
import { PaperType, paperTypeState } from '@state/paperType';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const STEP = {
  선택: '선택',
  쓰기: '쓰기',
  탄생: '탄생',
  형태: '형태',
  완료: '완료',
} as const;

type StepType = keyof typeof STEP;

export type StepContent = {
  title: string;
  description: string;
  buttonText: string;
  previousStep: StepType | null;
  nextStep: StepType | null;
};

export const StepContentMap = new Map<StepType, StepContent>([
  [
    STEP.선택,
    {
      title: '어떤 형태로\n일지를 작성할까요?',
      description: '마음에 드는 메모지 형태를 선택해주세요',
      buttonText: '선택완료',
      previousStep: null,
      nextStep: STEP.쓰기,
    },
  ],
  [
    STEP.쓰기,
    {
      title: '오늘 내 마음의 평화를 이룬\n이유를 기록해주세요',
      description: 'Tip. 종이를 누르면 기록을 시작할 수 있어요',
      buttonText: '작성완료',
      previousStep: STEP.선택,
      nextStep: STEP.탄생,
    },
  ],
  [
    STEP.탄생,
    {
      title: '오늘 내 마음의 평화는\n어떻게 탄생 했나요?',
      description: '작성한 평화의 형태를 선택해주세요',
      buttonText: '선택완료',
      previousStep: STEP.쓰기,
      nextStep: STEP.형태,
    },
  ],
  [
    STEP.형태,
    {
      title: '오늘 내 마음의 평화는\n어떤 형태였나요?',
      description: '작성한 평화의 형태를 선택해주세요',
      buttonText: '선택완료',
      previousStep: STEP.탄생,
      nextStep: STEP.완료,
    },
  ],
  [
    STEP.완료,
    {
      title: '일지 기록을\n성공적으로 완료하였습니다',
      description: '다른 사람의 일지도 둘러보세요',
      buttonText: '다른 사람 일지 보기',
      previousStep: null,
      nextStep: null,
    },
  ],
]);

const useStep = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<StepType>(STEP.선택);
  const daybook = useAtomValue(daybookAtom);
  const paperType = useAtomValue(paperTypeState);

  const nextStep = async () => {
    const nextStep = StepContentMap.get(step)?.nextStep;

    // 다음 스텝이 없으면, 완료 스탭
    if (!nextStep) {
      navigate('/', { replace: true });
      return;
    }

    // 일지 API 전송
    if (nextStep === STEP.완료) {
      setIsLoading(true);
      try {
        await postDaybook({ ...daybook, paperType: paperType as PaperType });
      } catch {
        alert('일시적인 오류가 발생했습니다. 😳');
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    }

    setStep(nextStep);
  };

  const previousStep = () => {
    const previousStep = StepContentMap.get(step)?.previousStep;

    // 이전 스텝이 없으면, 종이 선택 스탭
    if (!previousStep) {
      navigate('/', { replace: true });
      return;
    }

    setStep(previousStep);
  };

  return { isLoading, step, nextStep, previousStep };
};

export default useStep;
