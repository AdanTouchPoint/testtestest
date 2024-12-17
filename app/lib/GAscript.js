import Script from "next/script";

export const GAscript = () =>(
    <>
        {/* <!-- Google tag (gtag.js) --> */}
    <Script id="google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_URL_GA_ID}`}></Script>
    <Script id='googleAnalytics' strategy='afterInteractive'>

    {
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
 
      gtag('config', '${process.env.NEXT_PUBLIC_URL_GA_ID}');
     `}

    </Script>
    </>
);