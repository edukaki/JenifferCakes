'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../assets/images/icons/Jennifer-logo.svg';

export default function Navbar() {
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  return (
    <nav className="relative flex flex-row items-center justify-between p-4 bg-white z-50">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <ul
        className={`${
          menuHamburguer ? '' : 'hidden'
        } absolute top-full right-0 space-y-8 py-10 w-full bg-white text-center`}
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
