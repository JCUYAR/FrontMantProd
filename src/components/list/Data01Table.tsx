import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { fetchCTUSER } from "../services/CTUSERService"
import { CTUSERList } from "../types";

const Data01Table = () => {
    const [users, setUsers] = useState<CTUSERList[]>([]);

    useEffect(() => {
        console.log("pene")
        const getCTUSER = async () => {
            try {
                const usersData = await fetchCTUSER();
                console.log('Usuarios obtenidos:', usersData);
                setUsers(usersData);
            } catch (error) {
                throw error;
            }
        }
        getCTUSER();
    }, []);

    const handleEdit = (id:number) => {
        console.log("Editar usuario con ID: ", id)
    }

    const handleDelete = (id:number) => {
        console.log("Eliminar usuario con ID: ", id)
    }

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>CTUSER</td>
                        <td>TIPO DOC.</td>
                        <td>Acciones</td>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key ={user.id || index}>
                            <td>{user.id}</td>
                            <td>{user.name} {user.lname}</td>
                            <td>{user.doctype}</td>
                            <td>
                                <Button className="btn btn-success" onClick={() => handleEdit(user.id)}>
                                    Editar
                                </Button>
                                <Button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
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

export default Data01Table;