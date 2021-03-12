import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleTags();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <meta name="monetization" content="$ilp.uphold.com/XqPZ8mnNyprk" />
          <link
            rel="webmention"
            href="https://webmention.io/www.ethang.dev/webmention"
          />
          <link
            rel="pingback"
            href="https://webmention.io/www.ethang.dev/xmlrpc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
