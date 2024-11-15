

import React from "react";
import Image from "next/image";

// Ye Sarie images import karie hie Jo Sponsers ke folders main tie 
import apple from "../../app/assets/Apple.png";
import microsoft from "../../app/assets/Microsoft.png";
import slack from "../../app/assets/Slack.png";
import google from "../../app/assets/Google.png";

const Sponsors =() => {
    return(
        <>
    <div className="bg-[#043873] w-[1,921px] h-[574px] top-[4080px] py-[150px] px-[220px]
    flex justify-center">
        <div className="w-[1064px] h-[87px] ">
            <h1 className="text-white font-bold text-[72px]">Your Work,everywhere you are</h1>
            <p className="text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <div className=" flex justify-center items-center mt-20">
            <button className="bg-[#4F9CF9] text-white w-[171px] h-[63px] rounded-lg  hover:bg-sky-300"> Try Taskey
    &rarr;</button>
    </div>
        </div>
        </div>

        <div className="bg-white w-[1,921px] h-[574px] py-[30px] px-[100px]">
            <div className="w-[1482px] h-[87px] flex justify-center ">
                <h1 className="font-bold text-[72px] leading-[87.14px] traking-[-2%]"> Our Sponsers</h1>
            </div>
            
            
            <div className=" flex justify-around mt-40">
            <Image src={apple} alt="apple"/>
            <Image src={microsoft} alt="microsoft"/>
            <Image src={slack} alt="slack"/>
            <Image src={google} alt="google"/>
            </div>

        </div>
        </>
    )
}

export default Sponsors;