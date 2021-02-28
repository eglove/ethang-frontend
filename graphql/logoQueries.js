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

export const GITHUB_LOGO_QUERY = gql`
  query GITHUB_LOGO_QUERY {
    allLogos(where: { name: "GitHub" }) {
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;

export const GLOBE_LOGO_QUERY = gql`
  query GLOBE_LOGO_QUERY {
    allLogos(where: { name: "Globe" }) {
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;
