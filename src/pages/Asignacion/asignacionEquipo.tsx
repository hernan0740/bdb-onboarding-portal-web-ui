import React, { useState } from "react";
import TablaDinamica from "../../components/tableComponent";
import { inventarioEquipos } from "../../utils/cardData/copys";
import {deviceRequest} from "../../services/deviceServices";

export default function AsignacionEquipo() {
  const [formData, setFormData] = useState({
    documento: "",
    nombre: "",
    equipoSeleccionado: -1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.documento === "" ||
      formData.nombre === "" ||
      formData.equipoSeleccionado === -1
    ) {
      alert("Por favor completa todos los campos y selecciona un equipo");
      return;
    }

    const asignacion = {
      documento: formData.documento,
      nombre: formData.nombre,
      equipo: inventarioEquipos[formData.equipoSeleccionado],
    };

    console.log("Asignación guardada:", asignacion);

    try {
      const response = await deviceRequest(asignacion);
      console.log("Respuesta", response);
      setFormData({ documento: "", nombre: "", equipoSeleccionado: -1 });
    } catch (error) {
      console.error("Error durante el envío del formulario:", error);
    }
  };

  return (
    <div className="mx-auto w-25">
      <div className="card-title h2 mb-4 text-center">Asignación de equipo</div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="documento" className="form-label">
              Cédula
            </label>
            <input
              type="text"
              id="documento"
              name="documento"
              className="form-control"
              value={formData.documento}
              onChange={handleChange}
              placeholder="Ingresa cédula"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="equipoSeleccionado" className="form-label">
              Equipos disponibles
            </label>
            <select
              id="equipoSeleccionado"
              name="equipoSeleccionado"
              className="form-select"
              value={formData.equipoSeleccionado}
              onChange={handleChange}
              required
            >
              <option value={-1} disabled>
                Selecciona equipo
              </option>
              {inventarioEquipos.map((item, index) => (
                <option key={index} value={index}>
                  {item.equipo}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Solicitar
          </button>
        </fieldset>
      </form>

      <div className="mainContainer">
        <div className="card-title h4 mb-4 text-center">
          Detalle Equipos disponibles
        </div>
        <TablaDinamica data={inventarioEquipos} />
      </div>
    </div>
  );
}
