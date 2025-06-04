import React, { useState } from "react";
import CardComponent from "./cardComponent";
import {createAccessRequest} from "../services/accessServices";

export interface AccessComponentProps {
  userRole: string;
}

function AccessForm({ userRole }: AccessComponentProps) {
  const [formData, setFormData] = useState({
    document: "",
    awsAccess: "",
    githubAccess: "",
    grafana: false,
    jira: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;

    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    const name = target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.document) {
      alert("Debe completar todos los campos obligatorios.");
      return;
    }

    if (
      !formData.awsAccess &&
      !formData.githubAccess &&
      !formData.jira &&
      !formData.grafana
    ) {
      alert("Debe seleccionar al menos un permiso.");
      return;
    }

    console.log("Permisos solicitados:", { ...formData, userRole });
    console.log(formData);
    const res = await createAccessRequest(formData);
    console.log(res);
    alert("Formulario enviado con éxito");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h4 className="mb-4">Solicitud de Accesos Digitales ({userRole})</h4>

      <div className="mb-3">
        <label className="form-label">Número de documento</label>
        <input
          name="document"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formData.document}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Acceso AWS</label>
        <select
          name="awsAccess"
          className="form-select"
          onChange={handleChange}
          value={formData.awsAccess}
        >
          <option value="">Selecciona una opción</option>
          <option value="lectura">Lectura</option>
          <option value="edicion">Edición</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Acceso GitHub</label>
        <select
          name="githubAccess"
          className="form-select"
          onChange={handleChange}
          value={formData.githubAccess}
        >
          <option value="">Selecciona una opción</option>
          <option value="lectura">Lectura</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="grafana"
          id="grafana"
          onChange={handleChange}
          checked={formData.grafana}
        />
        <label className="form-check-label" htmlFor="grafana">
          Acceso a tableros de Grafana
        </label>
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="jira"
          id="jira"
          onChange={handleChange}
          checked={formData.jira}
        />
        <label className="form-check-label" htmlFor="jira">
          Acceso a Jira
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar solicitud
      </button>
    </form>
  );
}

export default AccessForm;
