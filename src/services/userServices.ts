import {endPoint, PATHS_ENDPOINTS} from "../config/enviroments";

export const createUser = async (userBody: any) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.user}`;
    console.log('data para creacion--°',userBody);
    const body = {
        "documento_identidad": userBody.documento,
        "nombre": userBody.nombre,
        "correo": userBody.correo,
        "area": userBody.area,
        "rol": userBody.rol,
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error("Falló la creacion de usuario");
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error user services ", error);
        throw error;
    }
}

export const getAllUsers = async () => {
    const url = `${endPoint}${PATHS_ENDPOINTS.user}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Falló la creacion de usuario");
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error user services ", error);
        throw error;
    }
}