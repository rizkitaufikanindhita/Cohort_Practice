import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    const namaNew = e.target.value;
    const nama = namaNew.toLowerCase();
    setUsername(nama);
  };

  const body = {
    username: username,
  };

  const login = async () => {
    const response = await axios.post(
      "http://localhost:3000/users/signin",
      body
    );
    if (response.data.msg == "login berhasil") {
      localStorage.setItem("username", username);
      navigate("/dashboard/");
    } else {
      alert("username tidak ditemukan");
    }
  };

  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="username"
          style={{ padding: 10 }}
          onChange={(e) => {
            handleUsername(e);
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={login}>Login</button>
      </div>
    </Fragment>
  );
};

export default Login;
