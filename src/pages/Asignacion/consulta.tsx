import React, { useState, useEffect } from "react";
import TablaDinamica from "../../components/tableComponent";
import { useUser } from "../../hooks/UserContext";
import ConsultaForm from "../../components/consultaForm";
import {getDeviceRequest} from "../../services/deviceServices";

type SolicitudEquipo = {
  id: number;
  nombre: string;
  documento: string;
  equipo: string;
  fecha: string;
};

export default function Consulta() {
  const [solicitudes, setSolicitudes] = useState<SolicitudEquipo[]>([]);
  const [resultadoConsulta, setResultadoConsulta] = useState<SolicitudEquipo[]>([]);
  const [loading, setLoading] = useState(false);
  const { role } = useUser();

  useEffect(() => {
    if (role === "lider") {
      cargarSolicitudesSimuladas();
    }
  }, [role]);

  const cargarSolicitudesSimuladas = () => {
    setLoading(true);
    setTimeout(() => {
      const datosSimulados: SolicitudEquipo[] = [
        {
          id: 1,
          nombre: "Juan Pérez",
          documento: "123456789",
          equipo: "MAC m1 256GB-16GB",
          fecha: "2025-06-01",
        },
        {
          id: 2,
          nombre: "María Gómez",
          documento: "987654321",
          equipo: "MAC m2 512GB-32GB",
          fecha: "2025-06-02",
        },
      ];
      setSolicitudes(datosSimulados);
      setLoading(false);
    }, 1000);
  };

  const getDeviceHandler = async (nombre: string, documento: string) => {
    try {
      setLoading(true);
      const resultado = await getDeviceRequest( documento,nombre);
      setResultadoConsulta(resultado);
    } catch (error) {
      console.error("Error en la consulta:", error);
      alert("Hubo un error al realizar la consulta.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="mx-auto w-75">
        {loading && role === "lider" ? (
            <p>Cargando solicitudes...</p>
        ) : solicitudes.length > 0 ? (
            <>
              <h2 className="mb-4 text-center">Solicitudes de Equipos</h2>
              <TablaDinamica data={solicitudes} />
            </>
        ) : null}

        <hr />

        <h3 className="mb-3">Consulta individual de equipo</h3>
        <ConsultaForm onSubmit={({ nombre, cedula }) => getDeviceHandler( nombre, cedula)} />

        {resultadoConsulta.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-3">Resultado de la consulta</h4>
              <TablaDinamica data={resultadoConsulta} />
            </div>
        )}
      </div>
  );
}
