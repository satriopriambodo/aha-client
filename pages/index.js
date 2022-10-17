import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>;
    </Fragment>
  );
}
