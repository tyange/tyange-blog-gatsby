import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  line-height: 1.7rem;

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
  }
`;

const PostTitle = styled.h1`
  line-height: 2.3rem;
  word-break: keep-all;
`;

const PostDate = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.3rem;
  width: 100%;
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
  return (
    <Layout>
      <PostWrapper>
        <div>
          <PostTitle>{data.mdx.frontmatter.title}</PostTitle>
          <PostDate>
            <span>{new Date(data.mdx.frontmatter.date).getFullYear()}년</span>
            <span>{new Date(data.mdx.frontmatter.date).getMonth() + 1}월</span>
            <span>{new Date(data.mdx.frontmatter.date).getDate()}일</span>
          </PostDate>
        </div>
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
