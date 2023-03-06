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
  console.log(navScroll);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-row w-full items-center justify-between p-4 z-50 bg-white ${
        navScroll ? 'sticky top-0' : 'relative border-b-2'
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <ul
        className={`${
          menuHamburguer ? '' : 'hidden'
        } absolute top-full right-0 space-y-8 py-10 w-full bg-white text-center z-50`}
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
      <button onClick={() => setMenuHamburguer(!menuHamburguer)}>
        {!menuHamburguer ? (
          <i className="fa-solid fa-bars fa-2xl" />
        ) : (
          <i className="fa-solid fa-xmark fa-2xl" />
        )}
      </button>
    </nav>
  );
}
