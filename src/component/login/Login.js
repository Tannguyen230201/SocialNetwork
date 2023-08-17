import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAPI } from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.Login.isLoading);
  // const token = useSelector((state) => state.Login.data.token);
  const error = useSelector((state) => state.Login.isError);
  // localStorage.setItem("token", token);
  const navigation = useNavigate();
  const handleLogin = () => {
    dispatch(LoginAPI(user));
    return
  };
  const user = {
    "user": {
      "email": email,
      "password": password,
    },
  };
  return (
      <Container
        style={{
          maxWidth: "450px",
          width: "auto",
          height: "300px",
          marginTop: "30px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label
            style={{ fontSize: "35px", fontWeight: "700", color: "#0d6efd" }}
          >
            Log In
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button
          className="mb-3"
          style={{ width: "100%", fontWeight: "600" }}
          onClick={handleLogin}
        >
          {isLoading ? "...Loading" : ""} Login
          {error ? alert("Tài khoản mật khẩu sai") : (navigation("/home"))}
        </Button>
        <Form.Label>
          Not a member ? <Link to="/signup">Signup now</Link>
        </Form.Label>
        <ToastContainer />
      </Container>
  );
};

export default Login;
