import Loader from 'react-loader-spinner';
import { LoaderStyles } from '../styles/LoaderStyles';

function Loading() {
  return (
    <LoaderStyles>
      <Loader type="TailSpin" color="#066FC3" height={100} width={100} />
    </LoaderStyles>
  );
}

export default Loading;
