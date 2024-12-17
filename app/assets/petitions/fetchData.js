const fetchData = async(petitionMethod, backendURLBase,endpoint, clientId, params = '') =>{
    const requestOptions = {
        method: `${petitionMethod}`,
        redirect: 'follow'
    }
    
    const data = await fetch(`${backendURLBase}${endpoint}?clientId=${clientId}&${params}`, requestOptions);
    const datos = await data.json()
    return datos
}


export {
    fetchData
}

