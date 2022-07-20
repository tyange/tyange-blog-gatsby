import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { Reading } from "../../types/types";
import { useBlogStore } from "../../store/blogStore";
import Category from "../../components/category";
import { useEffect } from "react";

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
      nodes: Reading[];
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

  const readingsData = data.allMdx.nodes.length > 0 ? data.allMdx.nodes : [];

  const categories = readingsData
    ? [
        ...new Set(
          readingsData.map((reading) => reading.frontmatter.category).flat()
        ),
      ]
    : null;

  useEffect(() => {
    if (selectedCategory && readingsData) {
      const showingReadings = readingsData.filter(
        (data) => data.frontmatter.category === selectedCategory
      );
      setReadings(showingReadings);
      return;
    }

    setReadings(readingsData);
  }, [selectedCategory, readingsData]);

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
        {readings!.length > 0 ? (
          <StyledUl>
            {readings.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
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
      nodes {
        id
        body
        frontmatter {
          category
          description
          title
          date
        }
        slug
      }
    }
  }
`;

export default Blog;
