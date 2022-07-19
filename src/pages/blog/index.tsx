import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const BlogWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  width: 50%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface Props {
  data: {
    allMdx: {
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            title: string;
            date: string;
            description: string;
          };
          slug: string;
        };
      }>;
    };
  };
}

const Blog = ({ data }: Props) => {
  return (
    <Layout>
      <BlogWrapper>
        <StyledUl>
          {data.allMdx.edges.map((post) => (
            <li key={post.node.id}>
              <Link to={`/blog/${post.node.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </StyledUl>
      </BlogWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          slug
        }
      }
    }
  }
`;

export default Blog;
