import { fetchData } from "./fetchData";

    const fetchTweet = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setTweet) => {
        const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params='')
        const textoTweet = datos.data?.docs[0] ? datos.data?.docs[0].Message : ' '
        setTweet(textoTweet)
    }


export {
    fetchTweet
}