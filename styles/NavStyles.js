import styled from 'styled-components';

export const NavStyles = styled.div`
  background: var(--headerColor);
  box-shadow: var(--boxShadow);
`;

export const InternalLinkStyles = styled.ul`
  display: inline-flex;

  a,
  a:visited {
    padding: 1rem;
    border: 1px solid var(--headerColor);
    color: var(--headerFontColor);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: var(--headerFontColor);
    color: var(--headerColor);
  }
`;

export const ExternalLinkStyles = styled(InternalLinkStyles)`
  float: right;
`;
