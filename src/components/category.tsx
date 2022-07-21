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
  const { selectedCategory, setSelectedCategory } = useBlogStore();

  const categoryHandler = (ctName: string) => {
    if (ctName === "all") {
      setSelectedCategory(null);
      return;
    }

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
      <span>{categoryName}</span>
    </CategoryButton>
  );
};

export default Category;
