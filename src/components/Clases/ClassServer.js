const API_URL = "http://127.0.0.1:8000/api/clases/";

export const listClases = async () =>{
    return await fetch(API_URL);
}