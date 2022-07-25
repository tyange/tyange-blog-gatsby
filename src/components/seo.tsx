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
      <link rel="icon" href={tyangeLogo} />
    </Helmet>
  );
};
