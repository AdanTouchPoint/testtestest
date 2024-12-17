export function urlEncode(text) {
    var encodedText = encodeURIComponent(text);
    return encodedText;
  }

  const mailerExtracter =  (mps) => {
    
    let emailsArr =[];
    for (let index = 0; index < mps.length; index++) {
        emailsArr.push(mps[index]?.email ? mps[index]?.email : mps[index]?.contact )
    }
    return emailsArr
}
export {
  mailerExtracter
}