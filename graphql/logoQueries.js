import { gql } from '@apollo/client';

export const HOME_LOGOS_QUERY = gql`
  query HOME_LOGOS_QUERY {
    allLogos(where: { home: true }) {
      id
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;

export const PORTFOLIO_LOGOS_QUERY = gql`
  query PORTFOLIO_LOGOS_QUERY {
    ghLogo: allLogos(where: { name: "GitHub" }) {
      ...logoData
    }

    globeLogo: allLogos(where: { name: "Globe" }) {
      ...logoData
    }
  }

  fragment logoData on Logo {
    image {
      publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
    }
    alt
  }
`;
