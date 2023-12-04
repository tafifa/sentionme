import React from 'react'
import Result from './result'
import Submit from './sentencetopredict'

export default function Mainsection() {
  return (
    <div className="absolute w-full h-full top-[111px] left-0 bg-[#181d28] flex flex-row justify-center ">
          <p className="absolute w-[987px] top-[88px]  [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[38px] text-center tracking-[0] leading-[normal]">
            Analisis Sentimen menggunakan Natural
            <br />
            Language Processing (NLP)
          </p>
          <Submit/>
          <div className="absolute w-[154px] top-[435px] left-[213px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Sentimen :
          </div>
          <Result/>
        </div>
  )
}