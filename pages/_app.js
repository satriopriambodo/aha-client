import "../styles/globals.css";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </Provider>
  );
}

export default MyApp;
