import "../styles/globals.css";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Fragment>
        <Layout>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </Layout>
      </Fragment>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
