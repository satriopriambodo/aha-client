import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
};
