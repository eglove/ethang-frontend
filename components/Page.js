import PropTypes from 'prop-types';
import { GlobalStyles } from '../styles/GlobalStyles.css';
import Nav from './Nav';

export const config = {
  unstable_runtimeJS: false,
};

function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.object,
};

export default Page;
