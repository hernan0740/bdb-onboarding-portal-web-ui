import AccessForm from "../../components/accessForm";
import React from "react";
import { useUser } from "../../hooks/UserContext";

export default function AsignacionAccesos() {
  const { role } = useUser();
  return (
    <div className="container mt-5">
      <AccessForm userRole={role || ""} />
    </div>
  );
}
