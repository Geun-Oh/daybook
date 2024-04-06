import styled from "@emotion/styled";
import ChevronLeftSVG from "@assets/svg/chevron_left.svg?react";
import HomeSVG from "@assets/svg/home.svg?react";
import IconAddSVG from "@assets/svg/ico_add.svg?react";
import getFontStyle from "@theme/font/getFontSize";
import { ComponentProps, PropsWithChildren, useCallback } from "react";
import { colors } from "@theme";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";

interface Props {
  title?: string;
}

function Header({ title, children }: PropsWithChildren<Props>) {
  return (
    <Wrapper>
      {!!title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

function Button({
  variety,
  ...attributes
}: ComponentProps<"button"> & {
  variety: "back" | "home" | "write" | "logout";
}) {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const renderSVG = useCallback(() => {
    if (variety === "back")
      return (
        <div onClick={() => navigate(-1)}>
          <ChevronLeftSVG />
        </div>
      );
    if (variety === "home") return <HomeSVG />;
    if (variety === "logout")
      return <LogoutButton onClick={logout}>로그아웃</LogoutButton>;
  }, [logout, variety]);

  if (variety === "write") return <WriteCTA />;

  return <TouchableButton {...attributes}>{renderSVG()}</TouchableButton>;
}

function WriteCTA() {
  return (
    <WriteCTAButton to="/write">
      <IconAddSVG />
      <span>일지작성</span>
    </WriteCTAButton>
  );
}

export default Object.assign(Header, { Button });

const Title = styled.div`
  ${getFontStyle("header3")}
`;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  z-index: 10;
  background-color: transparent;
`;

const TouchableButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  left: 8px;
`;

const WriteCTAButton = styled(Link)`
  width: 106px;
  height: 40px;
  background-color: ${colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  position: absolute;
  top: 8px;
  right: 20px;

  span {
    color: white;
    ${getFontStyle("title4")}
  }
`;

const LogoutButton = styled.div`
  color: ${colors.primaryDark};
  ${getFontStyle("body4")};
  cursor: pointer;
`;
