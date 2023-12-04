import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="relative w-full h-[117px] top-0 left-0 bg-[#2c3852]">
          <Link href="/" className="absolute w-[270px] top-[18px] left-[60px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[41px] text-center tracking-[0] leading-[normal]">
            SENTIONME
          </Link>
          <Link href="/" className="absolute w-[154px] top-[43px] left-[798px] [font-family:'Inter-Regular',Helvetica] text-white text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:font-bold">
            Analyze
          </Link>
          <div className="absolute w-[201px] top-[68px] left-[116px] [font-family:'Inter',Helvetica] font-bold text-[#19bbc5] text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            by Dawam & Tafif
          </div>
          <Link href="/models" className="absolute w-[154px] top-[43px] left-[949px] [font-family:'Inter-Regular',Helvetica] text-white text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:font-bold">
            Models
          </Link>
          {/* <div className="absolute w-[187px] h-[63px] top-[28px] left-[1095px] bg-[#19bbc5] rounded-[28px]" /> */}
          <Link href="/about" className="absolute w-[154px] top-[43px] left-[1088px] [font-family:'Inter-Regular',Helvetica] text-white text-[26px] text-center tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:font-bold">
            About us
          </Link>
        </div>
  )
}

