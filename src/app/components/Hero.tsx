
import React from "react";

const Hero =() => {

    return(
        <>
        <div className="py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex justify-between items-start">
            <div className="w-[656px] h-[361px] ">
            <div className="w-[656px] h-[238px]">
                <h2 className="font-bold text-[64px] leading[77.45px] tracking-[-0.02em]">Get More Done With Whitepace </h2>
                <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div> 

              <button className='w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg flex flex-row justify-between gap-[10px] p-5 text-lg font-normal items-center mt-[60px] hover:bg-blue-500 hover:cursor-pointer'><p>Try Whitepace free</p><span>&#8594;</span></button>
        </div>
       

        {/* Ye wo image Hie {light blue} wali jo background main a rahi hie  */}
         <div className='w-[824px] h-[547px] bg-[#C4DEFD]'></div>
         
         </div>
        </>
    )
}   

export default Hero;