import { CTUSERList } from "../types";

export const fetchCTUSER = async (): Promise<CTUSERList[]> => {
    const response = await fetch('http://localhost:5048/api/CTUSER/List', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE3MzE1NDgyMTR9.HiG7IBYaPP5_y8c55d2mwUmfh160VyhUCqrCIEhGEw4`, // Agrega el token en los headers
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
    }
    return response.json();
};