// import Product from "../../components/company-profile/Product";
import { Fragment } from "react";
import Head from "next/head";

function LoginPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Product</title>
      </Head>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign in to Application</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-500 text-green hover:bg-green-dark focus:outline-none my-1"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage;
