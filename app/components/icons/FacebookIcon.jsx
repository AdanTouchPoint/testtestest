'use client'
const FacebookIcon = ({primaryColor, secundaryColor})=>{



    return(
        
        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-size">
<rect width="86" height="86" rx="43" fill={secundaryColor}/>
<path d="M45.2285 66V44.5627H52.5964L53.7018 36.2057H45.2285V30.871C45.2285 28.4522 45.9137 26.8038 49.4707 26.8038L54 26.802V19.3272C53.2167 19.2278 50.528 19 47.3986 19C40.864 19 36.3902 22.8939 36.3902 30.0433V36.2057H29V44.5627H36.3902V66H45.2285Z" fill={primaryColor}/>
</svg>

        
    )
}



export default FacebookIcon;
