import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Producto01Form = () => {
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
                            <label>Nombre del producto: </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Marca:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Precio:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Stock:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Estado:</label>
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

export default Producto01Form;