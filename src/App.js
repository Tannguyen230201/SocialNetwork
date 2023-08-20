// import logo from './logo.svg';
import "./App.css";
import Home from "./component/home/home";
import Login from "./component/login/Login";
import Comment from "./component/comment/Comment";
import { Route,Routes,Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comment" element={<Comment />} />

        {/* <Route path="/user" element={<User/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/updateUser" element={<UpdateUser/>} />  */}
      </Routes>
    </div>
  );
}

export default App;
