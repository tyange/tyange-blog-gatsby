import * as React from "react";
import Layout from "../components/layout";
import { graphql, navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

const PostWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  line-height: 1.7rem;
  word-break: keep-all;
  margin-top: 2rem;

  a {
    color: black;
  }

  code {
    font-family: "Courier New", monospace;
    font-size: inherit;
  }

  p > code,
  li > code,
  dd > code,
  td > code {
    background: #f9f2ed;
    word-break: break-all;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }

  .deckgo-highlight-code-carbon {
    margin: 1rem 0 1rem 0;
    box-shadow: none;
    line-height: 1.2rem;
    word-break: break-all;
  }
`;

const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: -3rem;
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  gap: 0.5rem;
`;

const PostTitleAndDate = styled.div`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  line-height: 2.3rem;
  word-break: keep-all;
  margin-bottom: 1rem;
`;

const PostDate = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.3rem;
  width: 100%;
  font-size: 0.9rem;
`;

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
    };
  };
}

const BlogPost = ({ data }: Props) => {
  const backHandler = () => {
    navigate("/");
  };

  return (
    <Layout>
      <PostWrapper>
        <BackButton onClick={backHandler}>
          <ArrowBack size="15" />
          <span>목록으로</span>
        </BackButton>
        <PostTitleAndDate>
          <PostTitle>{data.mdx.frontmatter.title}</PostTitle>
          <PostDate>
            <span>{new Date(data.mdx.frontmatter.date).getFullYear()}년</span>
            <span>{new Date(data.mdx.frontmatter.date).getMonth() + 1}월</span>
            <span>{new Date(data.mdx.frontmatter.date).getDate()}일</span>
          </PostDate>
        </PostTitleAndDate>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
