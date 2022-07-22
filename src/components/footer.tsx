import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 2rem 2rem;
  box-sizing: border-box;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Copyright>
          <span>&copy;</span>
        </Copyright>
        <div>
          <a href="https://github.com/tyange">tyange</a>
        </div>
        <span>{new Date().getFullYear()}</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
