import * as React from "react";
import { useBlogStore } from "../store/blogStore";
import styled from "styled-components";

interface ButtonStyleProps {
  pageSelected: boolean;
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const StyledButton = styled.button<ButtonStyleProps>`
  background: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;

  ${({ pageSelected }) =>
    pageSelected &&
    `
    background-color: #ccc;
  `}
`;

interface Props {
  pageNums: number;
}

const PageButtons = ({ pageNums }: Props) => {
  const { selectedPageNum, setSelectedPageNum } = useBlogStore();

  const pageSelectHandler = (pageNum: number) => {
    setSelectedPageNum(pageNum);
  };

  const pageNumsArray = Array.from(
    { length: pageNums },
    (_, index) => index + 1
  );

  return (
    <ButtonsWrapper>
      {pageNumsArray.map((pageNum) => (
        <StyledButton
          key={pageNum}
          onClick={() => pageSelectHandler(pageNum - 1)}
          pageSelected={pageNum - 1 === selectedPageNum}
        >
          {pageNum}
        </StyledButton>
      ))}
    </ButtonsWrapper>
  );
};

export default PageButtons;
