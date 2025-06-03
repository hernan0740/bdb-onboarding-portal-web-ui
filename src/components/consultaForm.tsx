import React, { useState } from "react";

type ConsultaFormProps = {
  onSubmit: (data: { nombre: string; cedula: string }) => void;
};

export default function ConsultaForm({ onSubmit }: ConsultaFormProps) {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !cedula.trim()) {
      alert("Por favor completa ambos campos.");
      return;
    }

    onSubmit({ nombre, cedula });

    setNombre("");
    setCedula("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa el nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cedula" className="form-label">
            Cédula
          </label>
          <input
            type="text"
            id="cedula"
            className="form-control"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Ingresa la cédula"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Consultar
        </button>
      </fieldset>
    </form>
  );
}
