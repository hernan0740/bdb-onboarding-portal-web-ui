import { Container, Navbar } from "react-bootstrap";
import FormComponent from "../../components/formComponent";
import { ingresoInputs } from "../../utils/cardData/copys";
import { Link } from "react-router-dom";
import home from "../../assets/images/home.png";
import user from "../../assets/images/user1.png";

export default function Ingreso() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={home}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <img
              src={user}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <div className="mx-auto w-50">
        <h1>Página Ingreso </h1>
        <FormComponent
          title="Formulario de Ingreso"
          url="/procesar-ingreso"
          buttonText="Guardar"
          inputs={ingresoInputs}
        />
      </div>
    </div>
  );
}
