import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data01List from "./list/Data01List";
import Data01Form from "./form/Data01Form1";

const Data01Page = () => {
    return (
        <Router>
            <Routes>
                {/* La lista se muestra en la ruta raíz */}
                <Route path="/" element={<Data01List />} />
                {/* El formulario se muestra en la ruta /ctuser/form */}
                <Route path="/ctuser/form" element={<Data01Form />} />
            </Routes>
        </Router>
    );
}

export default Data01Page;
