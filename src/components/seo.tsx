import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import tyangeLogo from "../images/tyange-logo.svg";

interface Props {
  title: string | null;
}

export const SEO = ({ title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <title>{`${site.siteMetadata.title}${title && `  |  ${title}`}`}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tyange.gatsbyjs.io/" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:image" content={tyangeLogo} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:site_name" content="tyange blog" />
      <meta property="og:locale" content="ko_KR" />
      <link rel="icon" href={tyangeLogo} />
    </Helmet>
  );
};
