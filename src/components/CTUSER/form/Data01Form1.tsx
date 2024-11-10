import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Data01Form = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="card">
            <div className="card-body">
                <form action="">
                    <div >
                        <div className="form-group">
                            <label>Nombres: </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Apellidos:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Tipo de documento:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>N° de documento:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Nacionalidad:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Dirección:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Fecha de nacimiento:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Género:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <a className="btn btn-success">Guardar</a>
                        <a className="btn btn-danger" onClick={handleCancel}>Cancelar</a>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default Data01Form;