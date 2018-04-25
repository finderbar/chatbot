import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="apple-itunes-app" content="app-id=1312708914"/>
          <meta name="google-play-app" content="app-id=com.getride.customer"/>
          <link rel="apple-touch-icon" href="icon.png"/>
          <link rel="android-touch-icon" href="icon.png"/>
          <link rel="shortcut icon" type="image/png" sizes="16x16 32x32 64x64 96x96" href="images/favicon-96x96.png"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"/>
          <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/css/bootstrap-material-design.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"></script>
          <script src="https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/js/bootstrap-material-design.js"></script>
          <script src="https://www.paypalobjects.com/api/checkout.js" data-version-4></script>

        </Head>
        <body style={{ backgroundColor: "#d6d6d6" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
