import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  align-items: center;

  > p {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Date = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: 0.6rem;
  font-size: 0.8rem;
`;

const Description = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
`;

interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const Post = ({ slug, title, description, date }: Props) => {
  return (
    <StyledLink to={slug}>
      <Title>
        <p>{title}</p>
      </Title>
      <Date>
        <p>{date}</p>
      </Date>
      <Description>
        <p>{description}</p>
      </Description>
    </StyledLink>
  );
};

export default Post;
