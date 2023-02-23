'use client';
import carousel1 from '../assets/images/mobile/carousel1_head.png';
import carousel2 from '../assets/images/mobile/carousel2_head.png';
import carousel3 from '../assets/images/mobile/carousel3_head.png';
import Button from '@/components/Button';
import profile from '../assets/images/mobile/jeniffer-profile.png';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <header className="h-[calc(100vh-100px)] flex flex-row items-center">
      <div className="container-mobile flex flex-col items-center">
        <h1 className="text-center font-bold">Bolos feitos com amor</h1>
        <Carousel
          arrImage={[carousel1, carousel2, carousel3]}
          alt="Fatia de bolo"
        />
        <Button
          alternative
          text="Ver cardápio"
          href="/cardapio"
          margin="mt-0"
        />
      </div>
    </header>
  );
}
