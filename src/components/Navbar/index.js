'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import logo from '../../assets/images/icons/Jennifer-logo.svg';

export default function Navbar() {
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  function handleScroll() {
    setNavScroll(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white z-50 container-mobile ${
        navScroll ? 'sticky top-0' : 'relative'
      }`}
    >
      <div className="relative flex flex-row w-full items-center justify-between p-4 2xl:max-w-[70%] 2xl:mx-auto">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul
          className={`${
            menuHamburguer ? '' : 'hidden'
          } absolute top-full right-0 space-y-8 py-10 w-full bg-white text-center z-50 xl:relative xl:flex xl:flex-row xl:items-center xl:gap-24 xl:text-xl xl:space-y-0 xl:py-0 xl:w-auto xl:justify-center`}
        >
          <li>
            <Link href="/" onClick={() => setMenuHamburguer(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/galeria" onClick={() => setMenuHamburguer(false)}>
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/cardapio" onClick={() => setMenuHamburguer(false)}>
              Cardápio
            </Link>
          </li>
        </ul>
        <button
          className="xl:hidden"
          onClick={() => setMenuHamburguer(!menuHamburguer)}
        >
          {!menuHamburguer ? (
            <i className="fa-solid fa-bars fa-2xl" />
          ) : (
            <i className="fa-solid fa-xmark fa-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
}
