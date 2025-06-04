import React, { useState } from "react";

type ConsultaFormProps = {
  onSubmit: (data: {cedula: string }) => void;
};

export default function ConsultaForm({ onSubmit }: ConsultaFormProps) {
  const [cedula, setCedula] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cedula.trim()) {
      alert("Por favor completa ambos campos.");
      return;
    }

    onSubmit({cedula} );

    setCedula("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
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
