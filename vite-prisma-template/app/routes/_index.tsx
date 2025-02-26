import type { MetaFunction } from "@remix-run/node";
import { Nav } from '../components/mainsite-nav';
import { Footer } from '../components/footer';

export const meta: MetaFunction = () => {
  return [
    { title: "unknown" },
    { name: "unknown", content: "Welcome to unknown!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center bg-gradient-to-br from-gray-900 to-blue-900">
      <Nav />
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-4xl font-bold text-white">Welcome to unknown</h1>
        <p className="text-white">A place for unknown</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 border-2 rounded-full min-w-96 min-h-96 bg-gradient-to-br from-teal-900 to-purple-900">
        <h4 className="-mt-10 text-2xl font-bold text-amber-400">Tokenomics</h4>
        <div className="mt-10 flex flex-col w-2/3 items-start justify-center">
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <p>Community</p>
            <div className="min-w-[65%] bg-slate-600 rounded">
              <div className="w-2/3 bg-red-600 h-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const resources = [
  {
    href: "/login",
    text: "Login / Signup",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    ),
  },
];
