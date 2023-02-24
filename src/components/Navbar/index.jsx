'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../assets/images/icons/Jennifer-logo.png';

export default function Navbar() {
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  return (
    <nav className="relative flex flex-row items-center justify-between p-4 bg-white z-50">
      <Image src={logo} alt="logo" />
      <ul
        className={`${
          menuHamburguer ? '' : 'hidden'
        } absolute top-full right-0 space-y-8 py-10 w-full bg-white text-center`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/galeria">Galeria</Link>
        </li>
        <li>
          <Link href="/cardapio">Cardápio</Link>
        </li>
      </ul>
      <button onClick={() => setMenuHamburguer(!menuHamburguer)}>
        <i className="fa-solid fa-bars fa-2xl"></i>
      </button>
    </nav>
  );
}
