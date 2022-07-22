import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { QuestionCircle } from "@styled-icons/fa-regular/QuestionCircle";

import tyangeLogo from "../images/tyange-logo.svg";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const HeaderWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;

  > a {
    color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div>
          <Link to={"/"}>
            <img src={tyangeLogo} alt="블로그 로고" />
          </Link>
        </div>
        <Menu>
          <a href="https://github.com/tyange">
            <Github size="23" />
          </a>
          <Link to={"/about"}>
            <QuestionCircle size="23" />
          </Link>
        </Menu>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
