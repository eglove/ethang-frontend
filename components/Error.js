import PropTypes from 'prop-types';
import { ErrorStyles } from '../styles/PageStyles';

function Error({ message }) {
  return (
    <ErrorStyles>
      <p>{message}</p>
    </ErrorStyles>
  );
}

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
