import React, { useState } from "react";
import Button from "react-bootstrap/cjs/Button";
import { urlEncode } from '../assets/helpers/utilities';
import { useCompletion } from "ai/react";
import LoadingMainForm from "./LoadingMainForm";
import { Form } from "react-bootstrap";
import { generateEtags } from "@/next.config";
import MobileButtons from "./MobileButtons";
import { fetchLeads } from "../assets/petitions/fetchLeads";
const List = ({
  setMany,
  mps,
  dataUser,
  mainData,
  setEmailData,
  setShowFindForm,
  setHideIAPrompt,
  tweet,
  setShowList,
  showMainContainer,
  setShowMainContainer,
  colors,
  emailData,
  leads,
  setLeads,
  backendURLBase, 
  endpoints,
  clientId
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }
  const buttonText = isMouseOver ? mps.phone : "Call";

  const generateTweet = (completion) => {
    if (completion !== "" ) {
      const encoder =  urlEncode(completion.replace(/['"]+/g, ''));
      const tweetText =  `.${mps.twitter} ${encoder}`;
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}`)
        return
    }
  return console.log("vacio")
  }
  const {
    complete,
    completion,
    isLoading,
  } = useCompletion({
    api: "/api/tweet",
  });
  const click = (e) => {
    e.preventDefault();
    fetchLeads(
      true,
      backendURLBase,
      endpoints,
      clientId,
      dataUser,
      emailData,
      'NA',
      'mail-lead'
    );
    setLeads(leads + 1)
    setEmailData({
      ...dataUser,
      ...mps,
    });
    setMany(false)
    setHideIAPrompt(false);
    setShowFindForm(true);
    setShowList(true)
    setShowMainContainer(true)
  };
  const clickAI = async (e) => {
      e.preventDefault()
      const text = await complete(`write a tweet using this prompt: ${tweet}`)
      generateTweet(text)
      fetchLeads(
        true,
        backendURLBase,
        endpoints,
        clientId,
        dataUser,
        emailData,
        'NA',
        'tweet-lead'
      );
    }
  const loading = (cl) => {
    return <LoadingMainForm cl={cl} />;
  };

  const clickPhone = ()=>{
    fetchLeads(
      true,
      backendURLBase,
      endpoints,
      clientId,
      dataUser,
      emailData,
      'NA',
      'phone-lead'
    );
  }
  return (
    <>
    
    <div className={"buttonsContainer"}>
    {
    isLoading === true ? (
      loading("spinner.conatinerB")
    ) : (
      <>
        
        <div className={"list-content-location"}>
          <div>
            <h3 className="representative-name"> {mps.name} </h3>
            <p className="representative-info">
              {mps.party ? mps.party : " ---"}, &nbsp;
               {mps.state ? mps.state : " ---"}
            </p>
          </div>
          <div className="buttons-for-mobile">
            
            <MobileButtons
              primaryColor={colors.background_color}
              secundaryColor={colors.link_color}
              mps={mps}
              emailFunction={click}
              tweetFunction={clickAI}
            />

          </div>
        </div>
        <div className={"buttons"}>
          <div className="list-button">
                {mps.twitter && mps.clientId?.plan !== "basic" ? (
                  <Button
                    id="tweetList-button"
                    className="list-button"
                    size={"lg"}
                    variant={"dark"}
                    target={"blank"}
                    onClick={clickAI}
                  >
                    Tweet
                  </Button>
                ) : (
                  <p className="list-notweeter-text">No Twitter</p>
                )}
          </div>

          <div className="list-button">
            {mps.email ? (
              <Button
                id="emailList-button"
                className="list-button"
                size={"sm"}
                variant={"dark"}
                target={"blank"}
                onClick={click}
              >
                Email
              </Button>
            ) : (
              <p className="list-notweeter-text">No Email</p>
            )}
          </div>
          <div className="list-button">
            {mps.phone && mps.clientId?.plan !== "basic" ? (
              <Button
                id="callList-button"
                className="list-button"
                size={"sm"}
                variant={"dark"}
                href={`tel:${mps.phone}`}
                target={"blank"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={clickPhone}
              >
                {buttonText}
              </Button>
            ) : (
              <p className="list-notweeter-text">No Phone</p>
            )}
          </div>

        </div>
  </>
    )
  }
   </div>  
    </>
  );
};

export default List;