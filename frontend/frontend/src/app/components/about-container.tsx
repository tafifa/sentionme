import React, { Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gitpic from 'public/icongit.png';
import igpic from 'public/iconig.png';
import linkedinpic from 'public/iconlinkedin.png';
import mailpic from 'public/iconmail.png';
import twitpic from 'public/icontwit.png';

export default function Abuotcontainer() {
  return (
    <div className='absolute w-[274px] h-[527px] left-[281px] top-[148px]'>
        <div className="absolute w-[274px] h-[274px] bg-[#d9d9d9] rounded-full"></div>
        <div className="absolute w-[274px] top-[304px] [font-family:'Inter',Helvetica] font-bold text-white text-[26px] text-center">
            Dawam</div>
        <div className="absolute w-[274px] top-[334px] [font-family:'Inter',Helvetica] font-bold text-white text-[26px] text-center">
            Agung Fathoni</div>
        <div className="absolute w-[274px] top-[394px] [font-family:'Inter',Helvetica] font-bold text-white text-[26px] text-center">
            ML Engineer</div>
        <div className="absolute w-[274px] top-[424px] [font-family:'Inter',Helvetica] font-bold text-white text-[26px] text-center">
            &</div>
        <div className="absolute w-[274px] top-[454px] [font-family:'Inter',Helvetica] font-bold text-white text-[26px] text-center">
            Frontend Developer</div>
        <div className="absolute w-[274px] h-[1px] bg-[#d9d9d9] top-[384px]"></div>
        <div className="absolute w-[274px] h-[41px] top-[500px] flex ">
            <Link href={"https://github.com/Tricksyer"} target='blank' className='mx-2'>
            <Image src={gitpic} alt='github' />
            </Link>
            <Link href={"/"} className='mx-2'>
            <Image src={igpic} alt='ig' />
            </Link>
            <Link href={"https://www.linkedin.com/in/dawam-agung-fathoni/"} className='mx-2'>
            <Image src={linkedinpic} alt='linkedin' />
            </Link>
            <Link href={"d1041211005@student.untan.ac.id"} className='mx-2'>
            <Image src={mailpic} alt='mail' />
            </Link>
            <Link href={"https://twitter.com/Tricksyer_json"} className='mx-2'>
            <Image src={twitpic} alt='twit' />
            </Link>
        </div>
    </div>
  )
}
