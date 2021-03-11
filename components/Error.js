import PropTypes from 'prop-types';
import Head from 'next/head';
import { ErrorStyles } from '../styles/PageStyles';

export const config = {
  unstable_runtimeJS: false,
};

function Error({ message }) {
  return (
    <ErrorStyles>
      <Head>
        <title>EthanG | Error!</title>
        <meta name="description" content="Oh no! How did you get here?" />
      </Head>
      <p>{message}</p>
    </ErrorStyles>
  );
}

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
