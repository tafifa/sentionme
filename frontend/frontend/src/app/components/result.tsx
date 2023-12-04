import { NextApiResponse } from 'next'
import { type } from 'os'
import React from 'react'

type ResultProps={
    data: string
}

export default function Result(){
    return (
        <div className="absolute w-[153px] h-[57px] top-[422px] left-[376px] bg-[#fef7fa] rounded-[10px]">
            <div className="absolute w-[154px] top-[13px] left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#e63200] text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  NEGATIF
            </div>
        </div>
      )  
}