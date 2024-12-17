import { fetchData } from './fetchData';

const fetchEmailData = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setDataUser) =>{
  
  const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params);
        const payload = datos.data.docs[0].content;  
      if (payload.length > 0) {
        const txt = payload.map((el) => {
          return el.children[0].text + `\n`;
        });
        let sub = datos.data.docs[0].subject;
        setDataUser(prevDataUser => ({
          ...prevDataUser,
          message: txt.length > 0
            ? txt.join(" ").replace(/#/g, " ")
            : "Introduzca un texto sugerido",
          subject: sub.length > 0
            ? sub
            : "Por favor introduzca un asunto del correo"
        }));
        return txt;
      }
}
export {
  fetchEmailData
}