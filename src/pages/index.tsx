import * as React from "react";
import { useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { useBlogStore } from "../store/blogStore";
import { Reading } from "../types/types";

import Layout from "../components/layout";
import Category from "../components/category";
import Post from "../components/post";
import PageButtons from "../components/page-buttons";

const BlogWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
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
    selectedPageNum,
    chunkedReadings,
    setChunkedReadings,
  } = useBlogStore();

  const readingsData = data.allMdx.nodes.length > 0 ? data.allMdx.nodes : [];

  const chunkSize = 4;
  const categories = readingsData
    ? [
        ...new Set(
          readingsData.map((reading) => reading.frontmatter.category).flat()
        ),
      ]
    : null;

  const chunkingData = (data: Reading[]) => {
    const chunkedData = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      chunkedData.push(chunk);
    }

    return chunkedData;
  };

  useEffect(() => {
    if (selectedCategory && readingsData) {
      const showingReadings = readingsData.filter(
        (data) => data.frontmatter.category === selectedCategory
      );

      setChunkedReadings(chunkingData(showingReadings));
      return;
    }

    setChunkedReadings(chunkingData(readingsData));
  }, [selectedCategory, readingsData]);

  return (
    <Layout>
      <BlogWrapper>
        {categories && (
          <CategoryWrapper>
            <Category key="all" categoryName="all" />
            {categories.map((category) => (
              <Category key={category} categoryName={category} />
            ))}
          </CategoryWrapper>
        )}
        {chunkedReadings!.length > 0 ? (
          <PostList>
            {chunkedReadings[selectedPageNum].map((post) => (
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
      <PageButtons pageNums={chunkedReadings.length} />
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
