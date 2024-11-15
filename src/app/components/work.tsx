
import React from "react";
import Image from "next/image";
import circle from "../../app/assets/Work Together Image.png"; // Relative path


const Work =() => {
    return(
        <>
         <div className='bg-white h-[1150px] w-screen '>
          <div className='h-[650px] w-screen py-[100px] px-[150px] inset-x-[92px] flex items-center '>
            <div className="w-[500px] h-[300px] py-[30px] text-black">
                <h1 className="text-[65px] font-bold leading-[60px]">Project Management</h1>
                <p className="text-[14px] mt-5">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button className="bg-[#4F9CF9] p-7 rounded-lg mt-[50px] text-white hover:bg-sky-300">Get Started &rarr;</button>
            </div>
            <div className="h-[547px] w-[748px] ml-7 bg-[#C4DEFD] flex items-center"> </div>
          </div>
          <div className='w-screen px-[150px] inset-x-[92px] flex items-center gap-72'>
          <Image src={circle} alt='circle' className='w-[450px] h-[400px]'/>
            <div className="w-[500px] h-[300px] text-black">
                <h1 className="text-[72px] font-bold leading-[60px]">Work together</h1>
                <p className="text-[14px] mt-5">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                {/* Ye "Try it now" Ka Button hie  */}
                <button className="bg-[#4F9CF9] px-12 py-6 rounded-lg mt-[50px] text-white  hover:bg-sky-300">Try it now &rarr;</button>
            </div>
          </div>
    </div>
        </>
    )

} 

export default Work;