import styled from '@emotion/styled';
import getFontStyle from '@theme/font/getFontSize';
import { ComponentProps } from 'react';

function Textarea({ ...attributes }: ComponentProps<'textarea'>) {
  return <Wrapper {...attributes} />;
}

export default Textarea;

const Wrapper = styled.textarea`
  width: 100%;
  aspect-ratio: 350/330;
  padding: 30px;
  resize: none;
  outline: 0 none;
  border: none;
  ${getFontStyle('body1')};
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
`;
