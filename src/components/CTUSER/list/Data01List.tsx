import Data01ListHeader from "./Data01ListHeader";
import Data01Table from "./Data01Table";
import { useNavigate } from "react-router-dom";


const Data01List = () => {
    const navigate = useNavigate()

    const openForm = () => {
        navigate("/ctuser/form")
    }

    return (
        <>
            <a className="btn btn-success" onClick={openForm}>Agregar nuevo Ccos</a>
            <div className="card">
                <div className="card-header">
                    <Data01ListHeader />
                </div>
                <div className="card-body">
                    <Data01Table />
                </div>

            </div>
            
            
        </>
    );
}

export default Data01List;