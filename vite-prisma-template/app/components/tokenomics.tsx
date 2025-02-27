import { Link } from "@remix-run/react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';

export function Tokenomics() {
    const tokenomicsRef = useRef(null);
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    let tokenomicsTL = gsap.timeline({
        scrollTrigger: {
        trigger: tokenomicsRef.current,
        start: "top center",
        end: "top 100px",
        scrub: true,
        }
    });

    useLayoutEffect(() => {
        tokenomicsTL.set(tokenomicsRef.current, { x: -100, opacity: 0 }).to(tokenomicsRef.current, { x: 0, opacity: 1, duration: 1 })
    }, []);

    return (
        <div className="w-2/3 flex flex-row justify-around max-sm:flex-col" id="tokenomics-container" ref={tokenomicsRef}>
            <div className="flex flex-col items-center justify-center mt-16 border-2 rounded-full min-w-96 min-h-96 max-sm:min-w-56 max-sm:min-h-64  bg-gradient-to-br from-teal-900 to-purple-900">
                <h4 className="-mt-10 text-2xl font-bold text-amber-400 max-sm:mt-0 max-sm:text-lg">Tokenomics</h4>
                <div className="mt-10 flex flex-col w-2/3 items-start justify-center max-sm:mt-2">
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                    <p>Community</p>
                    <div className="min-w-[65%] max-sm:min-w-[45%] bg-slate-600 rounded">
                        <div className="w-2/3 bg-red-600 h-4 rounded"></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-amber-300 ml-10">
                <h4>Token Distrubution</h4>
                <p>Here is how we will be distributing our token initially</p>
            </div>
        </div>
    )
}