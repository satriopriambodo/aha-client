import "../styles/globals.css";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
