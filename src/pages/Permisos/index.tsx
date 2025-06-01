import {Button, Container, InputGroup, Navbar } from "react-bootstrap";
import home from '../../assets/images/home.png';
import key from '../../assets/images/key1.png';
import { Link } from "react-router-dom";
export default function PermisosPage() {



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
                            src={key}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <div className="mx-auto w-25">
                <form>
                    <fieldset>
                        <legend>Solicitud de Accesos Digitales</legend>
                        <div className="mb-3">
                            <label className="form-label">Grafana</label>
                            <input type="text" className="form-control"
                                   placeholder="Disabled input"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Aws services</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">perfil lectura</option>
                                <option value="2">perfil escritura</option>
                                <option value="3">no aplica</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Jira services</label>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="switchCheckChecked"
                                       checked={false}/>
                                <label className="form-check-label">Checked switch checkbox
                                    input</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"
                                       disabled/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

