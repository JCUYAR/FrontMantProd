import Producto01ListHeader from "./Producto01ListHeader";
import Producto01Table from "./Producto01Table";
import { useNavigate } from "react-router-dom";

const Producto01List = () => {
    const navigate = useNavigate()

    const openForm = () => {
        navigate("/prodcut/form")
    }

    return (
        <>
            <a className="btn btn-success" onClick={openForm}>Nuevo Producto</a>
            <div className="card">
                <div className="card-header">
                    <Producto01ListHeader/>
                </div>
                <div>
                    <Producto01Table/>
                </div>
            </div>
        </>

    );
}

export default Producto01List;