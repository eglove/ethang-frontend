import Link from 'next/link';
import {
  ExternalLinkStyles,
  InternalLinkStyles,
  NavStyles,
} from '../styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <InternalLinkStyles>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/recommended-courses">Recommended Courses</Link>
      </InternalLinkStyles>
      <ExternalLinkStyles>
        <Link href="https://www.linkedin.com/in/ethan-glover/">
          <a rel="me">LinkedIn</a>
        </Link>
        <Link href="https://github.com/eglove">
          <a rel="me">GitHub</a>
        </Link>
      </ExternalLinkStyles>
    </NavStyles>
  );
}

export default Nav;
