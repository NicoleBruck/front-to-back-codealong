import Document, { Head, Html, Main, NextScript } from 'next/document';

const APP_NAME = 'Soundify';
const APP_DESCRIPTION = 'Amazing music player';

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/soundify-icon-180-180.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <style>{`
              html, body, #__next {
                height: 100%;
              }
              #__next {
                margin: 0 auto;
              }
              h1 {
                text-align: center;
              }
              `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
