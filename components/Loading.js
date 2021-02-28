import Loader from 'react-loader-spinner';
import Head from 'next/head';
import { LoaderStyles } from '../styles/LoaderStyles';

function Loading() {
  return (
    <LoaderStyles>
      <Head>
        <title>Loading..</title>
      </Head>
      <Loader type="TailSpin" color="#066FC3" height={100} width={100} />
    </LoaderStyles>
  );
}

export default Loading;
