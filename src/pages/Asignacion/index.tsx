import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import home from '../../assets/images/home.png';
import key from '../../assets/images/key1.png';
import { DataCardsAsignacion } from "../../utils/cardData/copys";
import { useCardComponent } from "../../hooks/useCardComponent";
import { useCardPageComponent } from "../../hooks/useCardPageComponent";

export default function Asignacion() {

const cards = useCardComponent(DataCardsAsignacion);
    return (
        <div >
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
                            src={key}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="mx-auto w-75">
                <div className="mainContainer">
                    {cards}
                </div>
                <br/>
            </div>
            <Outlet/>
        </div>
    );
}
