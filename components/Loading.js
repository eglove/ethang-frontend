import Loader from 'react-loader-spinner';
import Head from 'next/head';
import { LoaderStyles } from '../styles/LoaderStyles';

export const config = {
  unstable_runtimeJS: false,
};

function Loading() {
  return (
    <LoaderStyles>
      <Head>
        <title>Loading...</title>
        <meta name="description" content="It's loading... hang on a sec." />
      </Head>
      <Loader type="TailSpin" color="#066FC3" height={100} width={100} />
    </LoaderStyles>
  );
}

export default Loading;
