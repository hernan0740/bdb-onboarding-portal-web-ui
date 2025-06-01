import {useEffect} from "react";

const endPoint = 'http://98.81.245.143:5000/';

export const getItems = async (path: string) => {
    const url = `${endPoint}${path}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error en la consulta: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error en getItems:', error);
        throw error;
    }
};

export const addItem = async(newItem: string ,path: string) => {
    const url = `${endPoint}${path}`;
    try {
        const response = await fetch(url,
            {
                method: 'POST',
                body: '',
                headers: {"Content-Type": "application/json",}
            });
        if (!response) {
            throw new Error('fallo consulta de peliculas')
        }
        console.log(response);
        return  response;
    } catch (error) {
        console.error('error al agregar movie',error);
        throw error;
    }
}

export const getItemId = async(id: string,path: string) => {
    const url = `${endPoint}${path}/${id}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('fallo consulta')
        }
        return  await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}