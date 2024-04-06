import 용기 from '@assets/svg/courage.svg?react';
import 공감 from '@assets/svg/empathy.svg?react';
import 배려 from '@assets/svg/consideration.svg?react';
import 사랑 from '@assets/svg/love.svg?react';
import 양보 from '@assets/svg/compromise.svg?react';
import 용서 from '@assets/svg/forgiveness.svg?react';
import 이해 from '@assets/svg/understanding.svg?react';
import 행복 from '@assets/svg/happiness.svg?react';
import 협동 from '@assets/svg/cooperation.svg?react';
import 희망 from '@assets/svg/hope.svg?react';

const hashtagIcon = {
  용기,
  공감,
  배려,
  사랑,
  양보,
  용서,
  이해,
  행복,
  협동,
  희망,
};

export type HashTagType = keyof typeof hashtagIcon;

export default hashtagIcon;
