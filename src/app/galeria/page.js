'use client';
import { objGallery } from '@/assets/utils/objGallery';
import Carousel from '@/components/Carousel';
import ColoredTitle from '@/components/ColoredTitle';

export default function Galeria() {
  return (
    <>
      <header>
        <h1 className="text-center tracking-wider leading-snug py-9">
          Galeria
        </h1>
      </header>
      <main>
        <section className="flex flex-col items-center text-center gap-7">
          <ColoredTitle bgColor="green" title="Aniversário Infantil" />
          <Carousel arrImage={objGallery[0].infantil} alt="Bolo infantil" />
          {/* <Link href="/galeria/infantil" className=" text-lg -mt-10 underline">
            ver mais
          </Link> */}
        </section>
        <section className="flex flex-col items-center text-center gap-7">
          <ColoredTitle bgColor="green" title="Aniversário e Celebrações" />
          <Carousel
            arrImage={objGallery[0].celebracoes}
            alt="Bolo de Celebrações"
          />
        </section>
        <section className="flex flex-col items-center text-center gap-7">
          <ColoredTitle bgColor="green" title="Casamento e Bodas" />
          <Carousel
            arrImage={objGallery[0].casamento}
            alt="Bolo de casamento"
          />
        </section>
      </main>
    </>
  );
}
