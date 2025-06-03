import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Ingreso from "./pages/Ingreso";
import Home from "./pages/Home";
import Permisos from "./pages/Permisos";
import Asignacion from "./pages/Asignacion";
import { ThemeProvider } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Consulta from "./pages/Asignacion/consulta";
import AsignacionEquipo from "./pages/Asignacion/asignacionEquipo";

import LoginPage from "./pages/Login";
import { UserProvider, useUser } from "./hooks/UserContext";
import ConsultaAccesos from "./pages/Permisos/consultaAccesos";
import AsignacionAccesos from "./pages/Permisos/asignacionAccesos";

function AppRoutes() {
  const { role } = useUser();

  return !role ? (
    <LoginPage />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/asignacion" element={<Asignacion />}>
        <Route path="consulta" element={<Consulta />} />
        <Route path="AsignacionEquipo" element={<AsignacionEquipo />} />
      </Route>
      <Route path="/permisos" element={<Permisos />}>
        <Route path="consultaAccesos" element={<ConsultaAccesos />} />
        <Route path="AsignacionAccesos" element={<AsignacionAccesos />} />
      </Route>
      <Route path="/ingreso" element={<Ingreso />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="parentContainer">
      <BrowserRouter>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
