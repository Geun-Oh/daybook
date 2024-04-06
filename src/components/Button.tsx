import { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme';
import { media } from '@theme/media';

export type ButtonType = 'default';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode | string;
  buttonType?: ButtonType;
  disabled?: boolean;
}

const Button = ({ children, buttonType = 'default', ...rest }: ButtonProps) => {
  const StyledButton = ButtonObj[buttonType as keyof typeof ButtonObj];
  const Render = (
    <StyledButton onClick={rest.onClick} {...rest}>
      {children}
    </StyledButton>
  );

  return Render;
};

export default Button;

const DefaultButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;
  color: ${colors.white};
  cursor: pointer;
  border: none;

  transition: 0.5s background-color;
  background-color: ${colors.primaryDark};
  &:disabled {
    background-color: ${colors.grey30};
  }

  ${media.tablet} {
    max-width: 768px;
    left: calc(50% - 384px);
  }
`;

const ButtonObj = {
  default: DefaultButton,
};
