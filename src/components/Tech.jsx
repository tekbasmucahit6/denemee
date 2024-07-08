import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

function Tech() {
  return (
    <>
        <div className='flex justify-center items-center mt-20 mb-20'>
            <strong className='text-white'>YETENEKLER</strong>
        </div>
        <div className='grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-20 px-10'>


            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaHtml5 className='text-orange-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>HTML5</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaCss3 className='text-blue-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>CSS3</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <IoLogoJavascript className='text-yellow-400 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>JAVASCRİPT</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <DiJqueryLogo className='text-blue-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>JQUERY</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaReact className='text-cyan-500 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>REACT</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaPhp className='text-blue-500 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>PHP</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaLaravel className='text-red-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>LARAVEL</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <SiMysql className='text-blue-500 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>MYSQL</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <RiTailwindCssFill className='text-cyan-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>TAİLWİNDCSS</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <DiResponsive className='text-white text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>RESPONSİVE</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaBootstrap className='text-violet-600 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>BOOTSTRAP</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            <div className='flex flex-col gap-5 shadow-xl text-white hover:scale-125 transition-all'>
                {/* yetenek icon */}
                <div className='flex justify-center items-center'>
                    <FaPython className='text-orange-500 text-5xl' />
                </div>
                {/* yetenek icon bitiş */}
                {/* yetenek isim */}
                <div className='flex justify-center items-center'>
                    <i>python</i>
                </div>
                {/* yetenek isim bitiş */}
            </div>

            


        </div>
        </>
  )
}

export default Tech