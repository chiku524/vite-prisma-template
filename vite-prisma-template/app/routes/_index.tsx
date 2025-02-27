import type { MetaFunction } from "@remix-run/node";
import { Nav } from '../components/mainsite-nav';
import { Footer } from '../components/footer';
import { Tokenomics } from '../components/tokenomics';
import { FoundationalPillars } from '../components/foundational-pillars';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "unknown" },
    { name: "unknown", content: "Welcome to unknown!" },
  ];
};

export default function Index() {
  const headerRef = useRef(null);

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useLayoutEffect(() => {
    tl.set(headerRef.current, { scale: 0, opacity: 0, duration: 1, stagger: 0.25 }).to(headerRef.current, { scale: 1, opacity: 1, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <div className="flex flex-col h-full items-center bg-gradient-to-br from-gray-900 to-blue-900">
      <Nav />
      <div className="flex flex-col items-center justify-center my-40 w-1/2" id="header" ref={headerRef}>
        <h1 className="text-4xl font-bold text-white mb-5 text-center text-amber-400">Welcome to unknown</h1>
        <p className="text-white text-center max-sm:text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <FoundationalPillars />
      <Tokenomics />
      <Footer />
    </div>
  );
}