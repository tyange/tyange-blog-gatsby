import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import styled from "styled-components";
import GlobalStyle from "./global-style";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledMain = styled.main`
  width: 60%;
  min-height: 50rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
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
