// components/TablaDinamica.tsx
import React from "react";
import { useDataTable } from "../hooks/useDataTable";

interface TablaDinamicaProps {
  data: Record<string, any>[];
}

const TablaDinamica: React.FC<TablaDinamicaProps> = ({ data }) => {
  const { columns } = useDataTable(data);

  if (data.length === 0) {
    return <p className="text-center">No hay datos disponibles.</p>;
  }

  return (
    <table className="table table-light table-striped mx-auto w-75">
      <thead>
        <tr>
          <th scope="col">#</th>
          {columns.map((col, idx) => (
            <th key={idx} scope="col">
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            {columns.map((col, idx) => (
              <td key={idx}>{item[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDinamica;
