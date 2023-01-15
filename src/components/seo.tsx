import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import tyangeLogo from "../images/tyange-logo.svg";

interface Props {
  title: string | null;
  slug: string;
  description?: string;
}

export const SEO = ({ title, slug, description }: Props) => {
  console.log(slug);

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
      <meta
        name="description"
        content={description ? description : site.siteMetadata.description}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          slug
            ? `${site.siteMetadata.siteUrl}/${slug}`
            : site.siteMetadata.siteUrl
        }
      />
      <meta
        property="og:title"
        content={title ? title : site.siteMetadata.title}
      />
      <meta property="og:image" content="https://iili.io/HY4kmG4.png" />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:site_name" content="tyange blog" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:site" content="tyange-blog" />
      <meta
        name="twitter:title"
        content={title ? title : site.siteMetadata.title}
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content={description ? description : site.siteMetadata.description}
      />
      <link rel="icon" href={tyangeLogo} />
      <link
        rel="canonical"
        href={
          slug
            ? `${site.siteMetadata.siteUrl}/${slug}`
            : site.siteMetadata.siteUrl
        }
      />
    </Helmet>
  );
};
