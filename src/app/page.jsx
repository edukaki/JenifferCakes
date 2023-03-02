'use client';
import Image from 'next/image';
import Button from '@/components/Button';
import profile from '@/assets/images/home/mobile/jeniffer-profile.png';
import Carousel from '@/components/Carousel';
import CardMain from '@/components/CardMain';
import artisan from '@/assets/images/home/mobile/artisan.png';
import quality from '@/assets/images/home/mobile/quality.png';
import ColoredTitle from '@/components/ColoredTitle';
import Quotes from '@/components/Quotes';
import { objTestimonials } from '@/assets/utils/objTestmonials';
import { objMainCarousel } from '@/assets/utils/objMainCarousel';
import callToAction from '@/assets/images/home/mobile/call-to-action-price.png';

export default function Home() {
  return (
    <>
      <header className="h-[calc(100vh-100px)] flex flex-row items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-center">Bolos feitos com amor</h1>
          <Carousel arrImage={objMainCarousel} alt="Fatia de bolo" />
          <Button
            alternative
            text="Ver cardápio"
            href="/cardapio"
            margin="mt-0"
          />
        </div>
      </header>
      <main>
        <section className="flex flex-col items-center text-center gap-7 min-h-screen">
          <h1 className="text-center w-9/12 tracking-wider leading-snug">
            Oi, eu sou a Jennifer !
          </h1>
          <Image
            className="w-8/12"
            src={profile}
            alt="Jeniffer segurando bolo"
          />
          <div className="flex flex-col items-center">
            <Quotes
              firstParagraph="Trabalho com confeitaria profissional há mais de 2 anos."
              secondParagraph="O que me dá mais satisfação é ver a alegria no rosto dos meus
              clientes."
            />
            <div className="grid grid-cols-2 py-2 my-6 text-xl w-11/12 text-center bg-white text-red-strong">
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
        <section className="flex flex-col gap-7">
          <ColoredTitle
            bgColor="pink"
            title="O sabor que todos Amam"
            calligraphy
          />
          <Carousel alt="testemunha" arrImage={objTestimonials} />
        </section>
        <section className="flex flex-col items-center gap-12">
          <ColoredTitle
            bgColor="green"
            title="Saboreie a Felicidade"
            calligraphy
          />
          <Image src={callToAction} alt="imagem de bolo com oferta" />
          <Button text="Ver cardápio" href="/cardapio" alternative />
        </section>
      </main>
    </>
  );
}
