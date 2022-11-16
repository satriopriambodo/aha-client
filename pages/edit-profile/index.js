import { Fragment, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/user";
import { useParams } from "react-router-dom";
import JwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { getDetailUser } from "../../redux/actions/user";

function EditProfilePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });
  const { id } = useParams();

  const token = localStorage.getItem("access_token");
  console.log(token, "token<<<<<<<<<<<<<<<<<<");

  let decoded = "";
  if (token) {
    decoded = JwtDecode(token);
  }
  console.log(decoded.id, "<<<<decoded");

  const { userDetail } = useSelector((store) => store);
  console.log(userDetail.data.data, "userdetail<<<<<<<<<<<<");

  useEffect(() => {
    dispatch(getDetailUser(decoded.id));
  }, [dispatch]);

  useEffect(() => {
    if (userDetail.data.data) {
      setForm({
        ...form,
        name: userDetail.data.data.name,
      });
    }
  }, [userDetail]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.name, " form.name<<<<<");

    // const formData = new FormData();
    // formData.append("name", form.name);

    dispatch(updateUser(decoded.id, form))
      .then((data) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Product</title>
      </Head>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Edit Your Profile</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Change Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}

                // onChange={(event) =>
                //   setForm({ ...form, store_name: event.target.value })
                // }
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-green hover:bg-green-dark focus:outline-none my-1"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch("https://aha-satrio.herokuapp.com/users");
//   const users = await res.json();

//   const paths = users.map((user) => {
//     return {
//       params: { id: user.id.toString() },
//     };
//   });
//   return { paths, fallback: false };
// }

export default EditProfilePage;
