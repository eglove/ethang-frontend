import Document, {
  Html,
  Head,
  NextScript,
  Main,
  // eslint-disable-next-line import/no-named-default
  default as NextDocument,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
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
