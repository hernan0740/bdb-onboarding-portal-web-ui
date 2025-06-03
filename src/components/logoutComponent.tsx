import React from "react";
import { useUser } from "../hooks/UserContext";

export default function LogoutButton() {
  const { setRole } = useUser();

  const handleLogout = () => {
    sessionStorage.removeItem("role");
    setRole(null);
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}
