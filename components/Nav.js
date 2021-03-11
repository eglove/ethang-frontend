import Link from 'next/link';
import {
  ExternalLinkStyles,
  InternalLinkStyles,
  NavStyles,
} from '../styles/NavStyles';

export const config = {
  unstable_runtimeJS: false,
};

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
        <Link href="https://www.linkedin.com/in/ethan-glover/">LinkedIn</Link>
        <Link href="https://github.com/eglove">GitHub</Link>
      </ExternalLinkStyles>
    </NavStyles>
  );
}

export default Nav;
