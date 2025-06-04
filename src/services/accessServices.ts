import {endPoint, PATHS_ENDPOINTS} from "../config/enviroments";

export const createAccessRequest= async (data: any) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.access}`;
    console.log('data para solicitud--°',data);
    const permisos = {
        awsAccess: data.awsAccess,
        githubAccess: data.githubAccess,
        grafana: data.grafana,
        jira: data.jira
    }
    const body = {
        "documento_identidad": data.document,
        "permisos": permisos
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
        console.error("Error access services ", error);
        throw error;
    }
}

export const getRequestByUser = async ( documento:string) => {
    const url = `${endPoint}${PATHS_ENDPOINTS.access}/${documento}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Falló la consulta de solicitud");
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error access services ", error);
        throw error;
    }
}