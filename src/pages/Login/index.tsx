import { useState } from "react";
import { useUser } from "../../hooks/UserContext";
import {authServices} from "../../services/authServices";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setRole } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authServices({
          'username': username,
          'password': password,
      });
      const token = response.token;

      const payload = JSON.parse(atob(token.split(".")[1]));
      sessionStorage.setItem("role", payload.role);
      console.log("role -->", payload);
      setRole(payload.role);
    } catch (error) {
      alert("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-3 w-50 mx-auto">
      <h2>Iniciar sesión</h2>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ingresar
      </button>
    </form>
  );
}
