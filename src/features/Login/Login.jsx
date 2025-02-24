import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { setIsAuth, setUser, isAuth } = useContext(AuthContext);

  const [form, setForm] = useState ({
    email:"",
    password:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = form;

    setIsAuth(true);
    setUser(email);

    navigate("/");
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,

    });
};

return <div>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.email}
        onChange={handleChange}
        name="email"
        />
      <input
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        />
      <button type="submit">Iniciar Sesión</button>

    </form>

    <h5 color="white">{isAuth ? "Autenticado" : "No autenticado"}</h5>
  </div>;
}

export default Login;