import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../Firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

import "./css/Login.css";

const Login = () => {
  const [{ user }] = useStateValue();
  const [{}, dispatch] = useStateValue();
  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Save th data into local storage so when page Refresh data remains in state
  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      JSON.parse(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  });

  return (
    <div className="login">
      <Paper className="loginDetails">
        <Typography variant="h4" className="my-2 loginText">
          Dashboard
        </Typography>
        <Button className="googleBtn my-4" onClick={googleSignIn}>
          Sign In with Google
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
