import Head from "next/head";
import {LinkedinShareButton,FacebookShareButton, TwitterShareButton,WhatsappShareButton } from "react-share";
import WhatsappIcon from "./icons/WhatsappIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import "./share.css";
const Share = ({shareMessage,shareUrl, colors }) => {  
  return (
    <div className="share-buttoner">
      <FacebookShareButton url={shareUrl? shareUrl: 'Fill this in your dashboard'} quote={shareMessage? shareMessage.replace(/"/g, '&quot;') :  'Fill this in your dashboard'} hashtag="#yodecidocomomemuevo" className="share-buttons">
      <FacebookIcon primaryColor={colors.background_color} secundaryColor={colors.link_color}  />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl? shareUrl: 'Fill this in your dashboard'} title={shareMessage? shareMessage : 'Fill this in your dashboard'}className="share-buttons">
      <TwitterIcon primaryColor={colors.background_color} secundaryColor={colors.link_color} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl? shareUrl: 'Fill this in your dashboard'} title={shareMessage? shareMessage : 'Fill this in your dashboard'} className="share-buttons">
      <WhatsappIcon primaryColor={colors.background_color} secundaryColor={colors.link_color} />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl? shareUrl: 'Fill this in your dashboard'} title={shareMessage? shareMessage : 'Fill this in your dashboard'} className="share-buttons">
      <LinkedinIcon primaryColor={colors.background_color} secundaryColor={colors.link_color} />
      </LinkedinShareButton>
      <Head>
        {/* Script de Facebook */}
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId={tu-app-id}" nonce="abcdefg" />
        {/* Script de Twitter */}
        <script async defer src="https://platform.twitter.com/widgets.js" />
        {/* Script de WhatsApp */}
        <script async defer src="https://cdn.jsdelivr.net/npm/@widgetbot/share-widget@1.1.0/whatsapp.js" />
      </Head>
    </div>
  );
};
export default Share;