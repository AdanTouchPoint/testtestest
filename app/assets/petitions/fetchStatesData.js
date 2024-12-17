import { fetchData } from "./fetchData"
const fetchStatesData = async (petitionMethod, backendURLBase, endpoint, clientId, params='', setStates) =>{
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params);
    const payload = datos.data
    const states = payload.map( el => {
    return  el.state
    } )
    const uniq = new Set(states)
          setStates([...uniq]);
}


export{
    fetchStatesData
}