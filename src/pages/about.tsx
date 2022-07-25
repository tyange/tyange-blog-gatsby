import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { SEO } from "../components/seo";

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
  }

  p:last-child span {
    margin-right: 0.5rem;
  }

  > div {
    line-height: 1.5;
  }

  > div div:first-child {
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <Layout>
      <SEO title="about" />
      <AboutContainer>
        <div>
          <div>
            <p>
              안녕하세요, 저는 유태양입니다.
              <br />이 블로그에 프로그래밍과 관련된 글을 쓰고 있습니다.
            </p>
          </div>
          <p>
            <span>문의(메일 보내기):</span>
            <a href="mailto:usun16@gmail.com">usun16@gmail.com</a>
          </p>
        </div>
      </AboutContainer>
    </Layout>
  );
};

export default About;
