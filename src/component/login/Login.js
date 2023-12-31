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
  const message = useSelector((state) => state.Login.message);
  // const token = useSelector((state) => state.Login.data.token);
  const error = useSelector((state) => state.Login.isError);
  const success = useSelector((state) => state.Login.isSuccess);
  const user = {
    user: {
      email: email,
      password: password,
    },
  };
  const navigation = useNavigate();
  const handleLogin = async () => {
    await dispatch(LoginAPI(user))
    navigation("/home")
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
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mb-3"
          style={{ width: "100%", fontWeight: "600" }}
          onClick={handleLogin}
        >
          {isLoading ? "...Loading" : ""} Login
        </Button>
        <Form.Label>
          Not a member ? <Link to="/signup">Signup now</Link> 
        </Form.Label>
        <ToastContainer />
      </Container>
  );
};

export default Login;
