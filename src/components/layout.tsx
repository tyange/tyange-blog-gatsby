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
  width: 50%;
  min-height: 50rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
