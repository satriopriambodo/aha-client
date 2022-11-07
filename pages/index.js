import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../redux/actions/user";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { userData } = useSelector((store) => store);

  return (
    <Fragment>
      <br />
      <table className="table w-full table-zebra border shadow-lg divide-y my-5">
        <thead>
          <tr className="text-center">
            <th className="font-bold text-2xl">Name</th>
            <th className="font-bold text-2xl">Email</th>
            <th className="font-bold text-2xl">Times Logged In</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {userData.data.map((each, index) => (
            <tr key={index}>
              <td>{each.name}</td>
              <td>{each.email}</td>
              <td>{each.numberOfTimesLoggedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
