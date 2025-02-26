import { useEffect, useState } from 'react'
import { Link } from "@remix-run/react"
import Logo from '../images/corki-logo.png'
import { gsap } from 'gsap'


export function Nav() {


    return (
      <div className=' bg-gradient-to-br from-gray-900 to-blue-800 w-full h-14 flex flex-row items-center justify-center'>
        <div className='w-1/3 h-14 flex flex-row items-center justify-center'>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Mainnet</span>
            </Link>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Testnet</span>
            </Link>            
            <div className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'><span>Team</span></div>
            <div className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'><span>Blog</span></div>
            <Link to="/" className='w-full flex justify-center items-center hover:cursor-pointer hover:drop-shadow-custom-green hover:bg-opacity-50'>
                <span>Settings</span>
            </Link>
        </div>
      </div>
    )
}