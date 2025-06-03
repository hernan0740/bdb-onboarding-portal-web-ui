import React from "react";

import { Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import home from "../../assets/images/home.png";
import { useUser } from "../../hooks/UserContext";
import { useCardComponent } from "../../hooks/useCardComponent";
import { DataCardsAccess } from "../../utils/cardData/copys";

export default function PermisosPage() {
  const { role } = useUser();
  console.log("useCard", role);
  const cards = useCardComponent(DataCardsAccess, role || "");

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
      </Navbar>
      <br />
      <div className="mx-auto w-75">
        <div className="mainContainer">{cards}</div>
        <br />
      </div>
      <Outlet />
    </div>
  );
}
