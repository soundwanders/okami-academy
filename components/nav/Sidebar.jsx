"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Close, Hamburger } from '@components/ui/Icons';
import { dojoRoutes } from '@constants/dojoRoutes';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme();

  const getImageSource = () => {
    if (theme === 'dark') {
      return '/assets/stance-white.png';
    }
    return '/assets/stance.png';
  };

  const router = useRouter();
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="flex">
        <button
          className={`
            hamburger text-gray-900 dark:text-slate-100 p-4 rounded focus:outline-none focus:bg-transparent
            ${isOpen ? "close-icon" : ""}
          `}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          aria-controls="toggle-sidebar"
          aria-describedby="search-submit-description"
          role="button"
          tabIndex="0"
        >
          <Hamburger />
        </button>
      </div>

      <nav
        id="sidebar"
        className={`
          sidebar bg-slate-100 dark:bg-gradient-to-b from-slate-800 to-slate-900 h-screen w-screen md:w-60
          fixed top-0 right-0 p-4 px-0
          ${isOpen ? "animate-slide-in-right" : "animate-slide-out-left"}
        `}
        role="navigation"
      >
        <button
          className="close-button text-slate-800 dark:text-slate-100 absolute top-6 left-6 z-20"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
          aria-controls="toggle-sidebar"
        >
          <Close />
        </button>

        <div className="flex justify-center mt-24">
          <Image 
            src={getImageSource()}
            alt="sidebar logo" 
            style={{objectFit:"scale-down"}}
            width={70}
            height={70}
          />
        </div>

        <div className="flex flex-col h-full items-center pt-8">
          <div className="block h-0.5 w-4/5 bg-slate-300 dark:bg-gray-700 mx-auto mb-4"></div>
          {dojoRoutes.map(({ route, label }) => (
            <Link 
              key={route}
              href={route} 
              className="sidebar-link font-semibold text-slate-850 dark:text-slate-200
              hover:text-slate-600 md:text-lg transition duration-200 p-4 rounded-md"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
