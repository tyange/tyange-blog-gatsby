import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import styled from "styled-components";
import GlobalStyle from "./global-style";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <Header />
        <StyledMain>{children}</StyledMain>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
