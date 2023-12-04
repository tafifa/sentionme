import React from 'react'
import Abuotcontainer from '../components/about-container'
import Abuotcontainerdua from '../components/about-container-2'

export default function About() {
  return (
    <div className="absolute w-full h-[1000px] top-[111px] left-0 bg-[#181d28] flex flex-row justify-center ">
      <div className="absolute w-[154px] top-[82px] [font-family:'Inter',Helvetica] font-bold text-center text-white text-[38px] tracking-[0] leading-[normal] whitespace-nowrap">About us</div>
      <Abuotcontainer/>
      {/* <Abuotcontainerdua/> */}
      
    </div>
  )
}
