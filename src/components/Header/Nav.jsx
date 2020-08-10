import React from "react";
import styled, { css } from "styled-components";
import List from "./List";
import Logo from "../Logo";
import { useRecoilState } from "recoil";
import { IsMenuOpenState } from "../../Recoil";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Modal.setAppElement("#root");

const Nav = styled.nav`
  padding: 2rem 1rem;
  box-sizing: border-box;
  user-select: none;
  border: 1px solid var(--red);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid var(--red);
    border-bottom: 50px solid transparent;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid var(--red);
    border-top: 50px solid transparent;
  }
  display: flex;
  align-items: center;
`;

const Button = styled(FontAwesomeIcon)`
  margin-left: auto;
  cursor: pointer;
  font-size: 2rem;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const PhoneNavigation = styled(Modal)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #000;
`;

const ExitButton = styled(FontAwesomeIcon)`
  color: red;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 4rem;
  cursor: pointer;
`;

const desktopCss = css`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    width: 100%;
    justify-content: Center;
    padding: 0;
  }
`;

const Navigation = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(IsMenuOpenState);
  console.log(isMenuOpen);
  return (
    <>
      <Nav>
        <Logo />
        <Button onClick={() => setIsMenuOpen(true)} icon={["fa", "bars"]} />
        <List css={desktopCss} />
      </Nav>

      <PhoneNavigation isOpen={isMenuOpen && true} onRequestClose={() => setIsMenuOpen(false)}>
        <ExitButton onClick={() => setIsMenuOpen(false)} icon={["fa", "times"]} />
        <List />
      </PhoneNavigation>
    </>
  );
};

export default Navigation;
