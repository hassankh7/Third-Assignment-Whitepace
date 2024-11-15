
import React from "react";


const Extension = () => {
    return(
        <>
        {/* first section */}
        <div className="bg-[#043873] w-[1,921px] h-[759px] px-[140px] py-[220px] top-[2509px] flex justify-between" > 
            <div className="h-[295px] w-[697px]">
                <h1 className="text-white font-bold text-[72px] leading[87.14px] tracking[-2%]mt-20px"> Use as Extension </h1>
                <p className="text-white">Use the web clipper extansion,available on Chrome and Microsoft,to save web pages or take screenshots as notes</p>

                {/* Ye "Lets Go"ka Button hie */}
                <button className="bg-[#4F9CF9] w-[191px] h-[63px] py-[20px] px-[50px] rounded-lg text-white mt-[30px]  hover:bg-sky-300">Lets Go &rarr;</button>
            </div>
            {/* Ye "Light Blue" Wala box Hie */}
            <div className="bg-[#C4DEFD] w-[686px] h-[479px] ">
            </div>
            {/* Second section */}
        </div>
        <div className="w-[1,921px] h-[812.09px] top-[3268px] py-[150px] px-[220px] flex justify-between gap-16">

            <div className="bg-[#C4DEFD] w-[715px] h-[532.09px]"></div>
            <div className="w-[669px] h-[410px]" >
                <h1 className="font-bold text-[72px]">Customise it to your needs </h1>
                <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                {/* Ye button ki dev hie  */}
            <div className="mt-20">
                <button className="bg-[#4F9CF9] w-[171px] h-[63px] py-[20px] px[60px] rounded-lg text-white  hover:bg-sky-300">Lets Go &rarr;</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Extension;