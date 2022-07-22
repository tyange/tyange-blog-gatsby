import * as React from "react";
import styled from "styled-components";
import { Email } from "@styled-icons/entypo/Email";
import { QuestionMark } from "@styled-icons/open-iconic/QuestionMark";

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
`;

const Logo = styled.div``;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <div>
          <span>
            <img src={tyangeLogo} alt="블로그 로고" />
          </span>
        </div>
        <Menu>
          <span>
            <Email size="20" />
          </span>
          <span>
            <QuestionMark size="18" />
          </span>
        </Menu>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
