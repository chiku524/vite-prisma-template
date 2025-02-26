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
    <div className="flex flex-col h-screen items-center bg-gradient-to-br from-gray-900 to-blue-800">
      <Nav />
      <div className="flex flex-col items-center gap-16">
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700 bg-black">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <ul>
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  rel="noreferrer"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
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
