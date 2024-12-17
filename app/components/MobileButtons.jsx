'use client'
import Link from "next/link";
import EmailIcon from "./icons/EmailIcon";
import TweetIcon from "./icons/TweetIcon";
import CallIcon from "./icons/CallIcon";


const MobileButtons = ({primaryColor, secundaryColor, mps, emailFunction, tweetFunction })=>{



    return(
        <div className="mobile-btns-cont">
                {
                    mps.email? (
                        <EmailIcon
                        primaryColor={primaryColor}
                        secundaryColor={secundaryColor}
                        emailFunction={emailFunction}
                        />
                    ) :
                    (<p className="list-notweeter-text">No Email</p>)
                }

                {
                    mps.twitter && mps.clientId?.plan !== "basic" ? 
                    (
                        <TweetIcon
                        primaryColor={primaryColor}
                        secundaryColor={secundaryColor}
                        tweetFunction={tweetFunction}
                        />
                    ):
                    (<p className="list-notweeter-text">No Tweeter</p>)
                }

                {
                    mps.phone && mps.clientId?.plan !== "basic" ?
                    (

                        <Link
                            target="_blank"
                            href={`tel:${mps.phone}`}
                        >
                            <CallIcon
                                primaryColor={primaryColor}
                                secundaryColor={secundaryColor}

                            />
                        
                        </Link>

                    ):
                    (
                        <p className="list-notweeter-text">No Phone</p>
                    )
                }

        </div>
        
    )
}



export default MobileButtons;
