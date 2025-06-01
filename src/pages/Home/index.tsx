import { Link } from 'react-router-dom';
import { useCardComponent } from '../../hooks/useCardComponent';
import { DataCardsHome } from '../../utils/cardData/copys';
import {Col, Navbar, Row } from 'react-bootstrap';
import home from '../../assets/images/home.png';

export default function Home() {
    const cards = useCardComponent(DataCardsHome);

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
                <div className="p-3 text-light-emphasis">
                    BDB ONBOARDING
                </div>

            </Navbar>
            <br/>
            <div>
                <div className="mainContainer">
                    {cards}
                </div>
                <br/>
                <div className="mainContainer">
                    <div className="card-title h4 mb-4 text-center">
                        Solicitudes Recientes
                    </div>
                    <table className="table table-light table-striped mx-auto w-75">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@social</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
