'use client'
import { type } from 'os'
import React, { useState } from 'react'
import { FormEvent} from 'react'

export default function Submit() {
  const [data, setData] = useState({
    subjek:""
  })
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (data.subjek === ""){
      return alert("data input is empty")
    }
    try{
      const response = await fetch("/api/predict", {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
        
      })
      const result = await response.json()
      console.log(result)
    }catch (error){
      throw new Error("data is not submitted");
      
    }
    
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="absolute w-[644px] h-[70px] top-[280px] left-[202px] bg-[#ffffff] rounded-[6px] border-[3px] border-solid border-white">
            <input 
            type='text' 
            className="absolute w-[544px] top-[22px] left-[42px] [font-family:'Inter-Bold',Helvetica] font-bold outline-none text-[#181d28bf] text-[20px] text-left bg-transparent tracking-[0] leading-[normal] whitespace-nowrap placeholder:text-[#181d28bf]"
            onChange={(event) =>{
              setData({ ...data, subjek: event.target.value})
            }}
            placeholder='Type here...'/>
          </div>
          <button type='submit' className="absolute w-[187px] h-[63px] top-[280px] left-[888px] bg-[#19bbc5] rounded-[48px]">
            <div className="absolute w-[154px] top-[14px] left-[13px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#181d28] text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-white">
              Analyze
            </div>
          </button>
    </form>
    
  )
}


