import {endPoint, PATHS_ENDPOINTS} from "../config/enviroments";


interface IAuth {
    username: string;
    password: string;
}

export const authServices = async (dataBody: IAuth) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.auth}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(dataBody),
        });

        if (!response.ok) {
            throw new Error("Falló la consulta de autenticación");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al autenticar", error);
        throw error;
    }
};
