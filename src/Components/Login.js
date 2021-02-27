import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div>
        <Paper className="loginDetails">
          <Typography variant="h4" className="my-2">
            Login
          </Typography>
          <Button className="googleBtn my-4">Sign In with Google</Button>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
