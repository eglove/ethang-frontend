import PropTypes from 'prop-types';
import Head from 'next/head';
import { ErrorStyles } from '../styles/PageStyles';

function Error({ message }) {
  return (
    <ErrorStyles>
      <Head>
        <title>EthanG | Error!</title>
      </Head>
      <p>{message}</p>
    </ErrorStyles>
  );
}

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
