// import Product from "../../components/company-profile/Product";
import { Fragment, useEffect } from "react";
import Head from "next/head";
// import EditProfile from "../../components/EditProfile";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import JwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { fetchUserData, updateUser } from "../../redux/actions/user";

function EditProfilePage() {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   name: "",
  // });

  // dispatch(update(form.name));

  // const [decode, setDecode] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // });
  // const userData = useSelector((state) => {
  //   console.log(state.userData, ".......s......");
  //   return state.userData;
  // });

  const handleSubmit = (id) => async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);

    if (!form.name) {
      Swal.fire({
        title: "Error!",
        text: "Error!",
        icon: "error",
      });
    } else {
      setIsLoading(true);

      axios
        .put(
          `https://aha-satrio.herokuapp.com/users/update_profile/:${id}`,
          formData
        )
        .then((res) => {
          Swal.fire({
            title: "success",
            text: res.message,
            icon: "success",
          });
          router.push("/");
          window.location.reload();
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
            name: "",
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
            <h1 className="mb-8 text-3xl text-center">Edit Your Profile</h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Change Name"
                // value={form.name}
                onChange={(e) => setForm(e.target.value)}

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

export default EditProfilePage;
