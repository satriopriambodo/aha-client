import { Fragment } from "react";
import Head from "next/head";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

function Auth() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      Swal.fire({
        title: "Error!",
        text: "Error!",
        icon: "error",
      });
    } else {
      setIsLoading(true);

      axios
        .post("https://aha-satrio.herokuapp.com/users/login", form)
        .then((res) => {
          console.log(res.data, "ssssss");
          localStorage.setItem("access_token", res.data.access_token);

          Swal.fire({
            title: "Success!",
            text: res.message,
            icon: "success",
          }).then(() => router.push("/"));
        })
        .catch((err) => {
          console.log(err, ":::::::::::::::::::::::::::::");
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
          });
        })
        .finally(() => {
          setForm({
            email: "",
            password: "",
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Product</title>
      </Head>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              Sign in to Application
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={(event) =>
                  setForm({ ...form, password: event.target.value })
                }
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-green hover:bg-green-dark focus:outline-none my-1"
              >
                Log in
              </button>
            </form>
            <div className="text-grey-dark mt-6">
              Don't have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                href="/register"
              >
                Sign up
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Auth;
