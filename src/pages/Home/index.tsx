import { Link } from "react-router-dom";
import { useCardComponent } from "../../hooks/useCardComponent";
import { DataCardsHome, inventarioEquipos } from "../../utils/cardData/copys";
import { Col, Navbar, Row } from "react-bootstrap";
import home from "../../assets/images/home.png";
import TablaDinamica from "../../components/tableComponent";
import { useUser } from "../../hooks/UserContext";
import LogoutButton from "../../components/logoutComponent";
import React, {useEffect, useState} from "react";
import {getAllUsers} from "../../services/userServices";

export default function Home() {
  const { role } = useUser();
  console.log("useCard", role);
  const cards = useCardComponent(DataCardsHome, role || "");
const [dataIngresos, setDataIngresos] = useState([]);
    const dataIngresosCall = async () => {
        try {

            const res = await getAllUsers();
            console.log("dataIngresos", res);
            if (res) {
                setDataIngresos(res);
            }
            console.log("dataIngresos", dataIngresos);

        } catch (error) {
            console.error("Error durante el envío del formulario:", error);
        }
    };

    useEffect(() => {
        dataIngresosCall();
    },[]);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={home}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="p-3 text-light-emphasis">BDB ONBOARDING</div>
        <div className="p-3 ms-auto text-light-emphasis">{LogoutButton()}</div>
      </Navbar>
      <br />
      <div>
        <div className="mainContainer">{cards}</div>
        <br />
        {role === "lider" && dataIngresos.length > 0 ? (
          <div className="mainContainer">
            <div className="card-title h4 mb-4 text-center">
              Solicitudes Recientes
            </div>
            <TablaDinamica data={dataIngresos} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
