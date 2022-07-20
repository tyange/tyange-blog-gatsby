import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { Reading } from "../../types/types";
import { useBlogStore } from "../../store/blogStore";
import Category from "../../components/category";

const BlogWrapper = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
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
        node: Reading;
      }>;
    };
  };
}

const Blog = ({ data }: Props) => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedPageNum,
    setSelectedPageNum,
    readings,
    setReadings,
  } = useBlogStore();

  const showingReadings =
    data.allMdx.edges.length > 0 ? data.allMdx.edges : null;

  const categories = showingReadings
    ? [
        ...new Set(
          showingReadings
            .map((reading) => reading.node.frontmatter.category)
            .flat()
        ),
      ]
    : null;

  return (
    <Layout>
      <BlogWrapper>
        {categories && (
          <CategoryWrapper>
            {categories.map((category) => (
              <Category categoryName={category} />
            ))}
          </CategoryWrapper>
        )}
        {showingReadings ? (
          <StyledUl>
            {showingReadings.map((post) => (
              <li key={post.node.id}>
                <Link to={`/blog/${post.node.slug}`}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </StyledUl>
        ) : (
          <div>
            <p>아직 포스트가 없습니다.</p>
          </div>
        )}
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
            category
          }
          slug
        }
      }
    }
  }
`;

export default Blog;
