

export const formater = async(data) =>{
    if(!data.data?.docs[0]){
        return {}
    }
    const specificdata = data.data?.docs[0];
    const formatedData = {};
    specificdata.header?.mainTitle ? formatedData.title = specificdata.header?.mainTitle : ''
    specificdata.header?.instructions ? formatedData.instruction = specificdata.header.instructions : ''
    specificdata.form?.formFields ? formatedData.formFields = specificdata.form?.formFields : ''
    specificdata.form?.terms ? formatedData.termsAndConditionsURL = specificdata.form?.terms : ''
    specificdata.emailForm?.subjectPlaceholder ? formatedData.emailFormSubjectPlaceholder = specificdata.emailForm?.subjectPlaceholder :''
    specificdata.repList?.mainP ? formatedData.note = specificdata.repList?.mainP :''
    formatedData.titleNoAI = specificdata["Email View no AI"]?.titleNoAI || '';
    formatedData.intructionsNoAI = specificdata["Email View no AI"]?.intructionsNoAI || '';
    formatedData.titleAI = specificdata["Email View with AI"]?.titleAI || '';
    formatedData.intructionsAI = specificdata["Email View with AI"]?.intructionsAI || '';
    formatedData.promptAI = specificdata["Prompt AI"]?.promptAI || '';
    return formatedData
}
