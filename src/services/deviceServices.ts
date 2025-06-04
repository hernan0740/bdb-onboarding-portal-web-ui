import {endPoint, PATHS_ENDPOINTS} from "../config/enviroments";

export const deviceRequest= async (data: any) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.equipment}`;
    console.log('data para solicitud--°',data);
    const body = {
        "documento_identidad": data.documento,
        "equipo": data.equipo,
        "serie": data.serie
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
            throw new Error("Falló la solicitud de equipo");
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error device services ", error);
        throw error;
    }
}

export const getDeviceRequest = async ( documento:string) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.equipment}/${documento}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Falló la consulta de dispositivo");
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error device services ", error);
        throw error;
    }
}

export const getDeviceData = async ( ) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.equipment}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Falló la consulta de dispositivo");
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error device services ", error);
        throw error;
    }
}

