import { useEffect, useState } from 'react'
import { Link } from "@remix-run/react"
import Logo from '../images/corki-logo.png'
import { gsap } from 'gsap'


export function Footer() {


    return (
      <div className=' bg-gradient-to-br from-gray-900 to-blue-800 w-full h-auto flex flex-col items-center justify-center'>
        <div className='flex flex-row w-full justify-center items-center'>
            <div className='flex flex-row justify-center items-center w-1/2' id='logo'></div>
            <div className='flex flex-row flex-wrap justify-around items-start w-1/3' id='content-container'>
                <div className='flex flex-col text-justify m-4' id='socials'>
                    <h3 className='text-base text-amber-400 font-semibold'>Socials</h3>
                    <span>Twitter</span>
                    <span>Discord</span>
                    <span>Telegram</span>
                    <span>Medium</span>
                    <span>GitHub</span>
                    <span>YouTube</span>
                    <span>Reddit</span>
                    <span>Instagram</span>
                    <span>TikTok</span>
                    <span>LinkedIn</span>
                    <span>Facebook</span>
                </div>
                <div className='flex flex-col text-justify m-4' id='ecosystem'>
                    <h3 className='text-base text-amber-400 font-semibold'>Socials</h3>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                </div>
                <div className='flex flex-col text-justify m-4' id='ecosystem'>
                    <h3 className='text-base text-amber-400 font-semibold'>Socials</h3>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                </div>
                <div className='flex flex-col text-justify m-4' id='ecosystem'>
                    <h3 className='text-base text-amber-400 font-semibold'>Socials</h3>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                    <span>Startup</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row w-full justify-center items-center mt-24' id='copyrights'>
            Copyrights Reserved, 2025. All Rights Reserved.
        </div>
      </div>
    )
}