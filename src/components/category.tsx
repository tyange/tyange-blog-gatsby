import * as React from "react";
import { useBlogStore } from "../store/blogStore";
import styled from "styled-components";

interface ButtonStyledProps {
  categorySelected: boolean;
}

const CategoryButton = styled.button<ButtonStyledProps>`
  background-color: transparent;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: 0.7rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;

  ${({ categorySelected }) =>
    categorySelected &&
    `
    background-color: #ccc;
  `}
`;

interface Props {
  categoryName: string;
}

const Category = ({ categoryName }: Props) => {
  const { selectedCategory, setSelectedCategory, setSelectedPageNum } =
    useBlogStore();

  const categoryNameConverted = (ctName: string) => {
    switch (ctName) {
      case "all":
        return "모든 글";
      case "typed-to-music":
        return "타이핑 소리에 박자 넣기";
      case "long-long":
        return "구구절절";
      case "not-hard-writing":
        return "힘들여 쓰지 않기";
      default:
        return ctName;
    }
  };

  const categoryHandler = (ctName: string) => {
    if (ctName === "all") {
      setSelectedPageNum(0);
      setSelectedCategory(null);
      return;
    }

    setSelectedPageNum(0);
    setSelectedCategory(ctName);
  };

  return (
    <CategoryButton
      onClick={() => categoryHandler(categoryName)}
      categorySelected={
        selectedCategory === categoryName ||
        (selectedCategory === null && categoryName === "all")
      }
    >
      <span>{categoryNameConverted(categoryName)}</span>
    </CategoryButton>
  );
};

export default Category;
