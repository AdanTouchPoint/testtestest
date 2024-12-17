import { fetchData } from "./fetchData";
const fetchLeads = (
  successResponse,
  backendURLBase,
  endpoints,
  clientId,
  dataUser,
  emailData,
  emailMessage = '',
  leadType
) => {
  fetchData(
    "POST",
    backendURLBase,
    endpoints.toSaveLeads,
    clientId,
    `&firstName=${dataUser.userName ? dataUser.userName : "NA"}&postalcode=${
      dataUser.postalCode ? dataUser.postalCode : "NA"
    }&emailData=${dataUser?.emailUser ? dataUser.emailUser : "NA"}&representative=${
      emailData?.name ? emailData?.name : 'NA'
    }&emailMessage=${emailMessage ? JSON.stringify(emailMessage) : 'NA'}&sended=${successResponse}&subject=${dataUser.subject ? dataUser.subject : 'NA'}&city=${dataUser.city ? dataUser.city : "NA"}&party=${dataUser.party ? dataUser.party : "NA"}&type${leadType}`
  );
  // console.log(clientId, 'clientID')
  // console.log(dataUser, 'subject')
  // console.log(emailMessage, 'message')
};

const fetchAllLeads = async (petitionMethod,backendURLBase, endpoint, clientId, setLeads) => {
  const  leads = await fetchData(petitionMethod, backendURLBase, endpoint, clientId)
   const data = leads.data
   setLeads(data)
}

export {
   fetchLeads, fetchAllLeads
}