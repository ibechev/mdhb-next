import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";

import { Header } from "../src/components";

import Global from "../src/style/Global";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>MDHB</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="description" content="...to do" />
          <link
            href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Saira+Semi+Condensed:300,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <style jsx global>
          {Global}
        </style>
      </Container>
    );
  }
}

export default MyApp;
