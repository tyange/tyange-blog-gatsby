import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

const PostWrapper = styled.div`
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
          <h3>{data.mdx.frontmatter.title}</h3>
          <span>{data.mdx.frontmatter.date}</span>
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
