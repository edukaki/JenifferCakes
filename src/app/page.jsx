'use client';
import Image from 'next/image';
import carousel1 from '@/assets/images/mobile/carousel1_head.png';
import carousel2 from '@/assets/images/mobile/carousel2_head.png';
import carousel3 from '@/assets/images/mobile/carousel3_head.png';
import Button from '@/components/Button';
import profile from '@/assets/images/mobile/jeniffer-profile.png';
import Carousel from '@/components/Carousel';
import CardMain from '@/components/CardMain';
import artisan from '@/assets/images/mobile/artisan.png';
import quality from '@/assets/images/mobile/quality.png';

export default function Home() {
  return (
    <>
      <header className="h-[calc(100vh-100px)] flex flex-row items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-center">Bolos feitos com amor</h1>
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
      <main className="flex flex-col gap-24">
        <section className="flex flex-col items-center text-center gap-7 h-screen">
          <h1 className="text-center w-9/12 tracking-wider leading-snug">
            Oi, eu sou a Jennifer !
          </h1>
          <Image
            className="w-8/12"
            src={profile}
            alt="Jeniffer segurando bolo"
          />
          <div className="flex flex-col text-xl w-11/12">
            <span className="text-7xl -mb-9 text-left w-full">“</span>
            <p className="px-4 pb-8">
              Trabalho com confeitaria profissional há mais de 2 anos.
            </p>
            <p className="px-4">
              O que me dá mais satisfação é ver a alegria no rosto dos meus
              clientes.
            </p>
            <span className="text-7xl -mb-10 text-right w-full">”</span>
            <div className="grid grid-cols-2 py-2 my-6 text-center bg-white text-red-strong">
              <span className="text-2xl p-4 font-semibold">
                1000 + bolos entregues
              </span>
              <span className="text-2xl p-4 font-semibold">
                500 + clientes felizes
              </span>
            </div>
          </div>
        </section>
        <CardMain
          title="Artesanal"
          src={artisan}
          color="green"
          alt="bolo sendo decorado a mão com morangos"
          subtitle="Lindos bolos feitos a mão"
          text="Cada bolo é confeitado com carinho e cada detalhe é considerado essencial"
          right
        />
        <CardMain
          title="Qualidade"
          src={quality}
          color="pink"
          alt="bolo com frutas vermelhas"
          subtitle="Ingredientes selecionados"
          text="Somente ingredientes frescos e de qualidade fazem parte da nossa receita"
          left
        />
      </main>
    </>
  );
}
