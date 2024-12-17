import { fetchData } from "./fetchData";

    const fetchQuestions = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setDataQuestions) => {
        const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params='')
        const questions = datos?.data.docs[0]
        const filtered = questions?.questions
        await setDataQuestions(filtered)
    }


export {
    fetchQuestions
}