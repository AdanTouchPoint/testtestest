import { fetchData } from "./fetchData";

const fetchTYM = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setTypData) =>{
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params = '',)
    setTypData(datos)
}
export {
    fetchTYM
}