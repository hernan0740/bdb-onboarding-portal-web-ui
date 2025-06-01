export default function AsignacionEquipo() {
    return (
        <div className="mx-auto w-25">
            <form >
                <fieldset>
                    <legend>Asignacion de equipo</legend>
                    <div className="mb-3">
                        <label className="form-label">Seleccionar equipo</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Equipo dispnibles</option>
                            <option value="1">MAC m1 256GB-16GB</option>
                            <option value="2">MAC m2 256GB-16GB</option>
                            <option value="3">MAC m1-R 256GB-16GB</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jira services</label>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked"
                                   checked={false}/>
                            <label className="form-check-label">Checked switch checkbox
                                input</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}