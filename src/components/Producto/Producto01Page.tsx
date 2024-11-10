import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Producto01List from "./list/Producto01List";
import Producto01Form from "./form/Producto01Form";

const Producto01Page = () => {
    return (
        <Router>
            <Routes>
                <Route path="/product" element={<Producto01List/>} />

                <Route path="/product/form" element={<Producto01Form/>}/>
            </Routes>
        </Router>
    );
}

export default Producto01Page;