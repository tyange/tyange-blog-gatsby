import * as React from "react";
import { useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { useBlogStore } from "../../store/blogStore";
import { Reading } from "../../types/types";

import Layout from "../../components/layout";
import Category from "../../components/category";
import Post from "../../components/post";

const BlogWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: black;
    text-decoration: none;
  }
`;

const PostItem = styled.li`
  width: 100%;
  height: 8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
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
            <Category categoryName="all" />
            {categories.map((category) => (
              <Category categoryName={category} />
            ))}
          </CategoryWrapper>
        )}
        {readings!.length > 0 ? (
          <PostList>
            {readings.map((post) => (
              <PostItem key={post.id}>
                <Post
                  slug={post.slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  date={post.frontmatter.date}
                />
              </PostItem>
            ))}
          </PostList>
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
