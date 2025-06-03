import React, { useState } from "react";
import { useUser } from "../../hooks/UserContext";
import ConsultaForm from "../../components/consultaForm";
import TablaDinamica from "../../components/tableComponent";

type AccesoData = {
    id: number;
    nombre: string;
    cedula: string;
    sistema: string;
    fechaAcceso: string;
};

export default function ConsultaAccesos() {
    const { role } = useUser();
    const [loading, setLoading] = useState(false);
    const [resultadoConsulta, setResultadoConsulta] = useState<AccesoData[]>([]);

    const consultarAccesos = async (nombre: string, cedula: string) => {
        try {
            setLoading(true);

            await new Promise((res) => setTimeout(res, 1000));

            const resultado: AccesoData[] = [
                {
                    id: 101,
                    nombre,
                    cedula,
                    sistema: "SAP",
                    fechaAcceso: "2025-06-03",
                },
            ];

            setResultadoConsulta(resultado);
        } catch (error) {
            console.error("Error al consultar accesos:", error);
            alert("Ocurrió un error al consultar los accesos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto w-75">
            <h3 className="mb-3">Consulta individual de ACCESOS</h3>

            <ConsultaForm
                onSubmit={({ nombre, cedula }) => consultarAccesos(nombre, cedula)}
            />

            {loading && <p>Consultando accesos...</p>}

            {resultadoConsulta.length > 0 && (
                <div className="mt-4">
                    <h4 className="mb-3">Resultado de la consulta</h4>
                    <TablaDinamica data={resultadoConsulta} />
                </div>
            )}
        </div>
    );
}

