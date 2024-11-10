import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { ProductoList } from "../../interfaces/prod01interface";
import { fetchProducto } from "../../services/ProductoService";

const Producto01Table =() => {
    const[product, setProduct] = useState<ProductoList[]>([]);

    const handleEdit = (id: number) => {
        console.log("Editar producto con ID: ", id)
    }

    const handleDelete = (id: number) => {
        console.log("Eliminar producto con ID: ", id)
    }

    useEffect(() => {
        const getProducto = async () => {
            try {
                const productoData = await fetchProducto();
                setProduct(Array.isArray(productoData) ? productoData : [])
                console.log(productoData)
            } catch (error) {
                throw error;
            }
        }
        getProducto();
    }, [])
    
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>PRODUCTO</td>
                        <td>PRECIO</td>
                        <td>STOCK</td>
                        <td>ESTADO</td>
                        <td>ACCIONES</td>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, index) => (
                        <tr key={product.idProductos || index}>
                            <td>{product.idProductos}</td>
                            <td>{product.nombre}</td>
                            <td>{product.precio}</td>
                            <td>{product.stock}</td>
                            <td>{product.estado === "1" ? "Activo" : "Inactivo"}</td>
                            <td>
                                <Button className="btn btn-success" onClick={() => handleEdit(product.idProductos)}>
                                    Editar
                                </Button>
                                <Button className="btn btn-danger" onClick={() => handleDelete(product.idProductos)}>
                                    Eliminar
                                </Button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
}

export default Producto01Table;