import { Link } from "@remix-run/react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';


export function FoundationalPillars() {
    const pillarsContainerRef = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        let tokenomicsTL = gsap.timeline({
            scrollTrigger: {
            trigger: pillarsContainerRef.current,
            start: "top bottom-=200px",
            end: "top 100px",
            scrub: true,
            }
        });

        tokenomicsTL.set(pillarsContainerRef.current, { opacity: 0 }).to(pillarsContainerRef.current, { opacity: 1, duration: 1 })

    }, []);

    return (
      <div className='h-auto flex flex-col items-center justify-center w-2/3 my-40'>
        <div className='flex flex-row justify-center items-center w-full' id='logo'></div>
        <div className='flex flex-row flex-wrap justify-around items-center w-full max-sm:flex-col' id='content-container' ref={pillarsContainerRef}>
            <div className='flex flex-col text-justify m-4 max-w-[25%] max-sm:max-w-[90%] border-indigo-600 border-2 rounded-3xl p-8 hover:cursor-pointer hover:shadow-custom-blue hover:-translate-y-2 hover:scale-105' id='card'>
                <h3 className='text-center text-amber-400 font-semibold mb-10'>Interoperability and Compatibility</h3>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col text-justify m-4 max-w-[25%] max-sm:max-w-[90%] border-indigo-600 border-2 rounded-3xl p-8 hover:cursor-pointer hover:shadow-custom-blue hover:-translate-y-2 hover:scale-105' id='card'>
                <h3 className='text-center text-amber-400 font-semibold mb-10'>Security and Compliance</h3>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col text-justify m-4 max-w-[25%] max-sm:max-w-[90%] border-indigo-600 border-2 rounded-3xl p-8 hover:cursor-pointer hover:shadow-custom-blue hover:-translate-y-2 hover:scale-105' id='card'>
                <h3 className='text-center text-amber-400 font-semibold mb-10'>Scalability and Performance</h3>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
      </div>
    )
}