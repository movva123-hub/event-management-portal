import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});
  const nav = useNavigate();

  const login = async () => {
  const res = await axios.post("http://localhost:5000/login", form);

  if (res.data.success) {
    alert("Login success");

    // ✅ SAVE USER WITH ROLE
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // ✅ REDIRECT BASED ON ROLE
    if (res.data.user.role === "admin") {
      nav("/admin");
    } else {
      nav("/events");
    }

  } else {
    alert("Invalid login");
  }
};
  return (
    <div className="container mt-5">
      <h3 className="text-center">Login</h3>

      <input
        className="form-control my-2"
        placeholder="Email or Phone"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
            phone: e.target.value
          })
        }
      />

      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <button className="btn btn-primary w-100" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;