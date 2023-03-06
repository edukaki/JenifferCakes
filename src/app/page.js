'use client';
import callToActionDesktop from '@/assets/images/home/desktop/call-to-action-price.jpg';
import artisan from '@/assets/images/home/mobile/artisan.png';
import callToAction from '@/assets/images/home/mobile/call-to-action-price.png';
import profile from '@/assets/images/home/mobile/jeniffer-profile.png';
import quality from '@/assets/images/home/mobile/quality.png';
import {
  objMainCarouselMobile,
  objMainCarouselDesktop,
} from '@/assets/utils/objMainCarousel';
import { objTestimonials } from '@/assets/utils/objTestmonials';
import Button from '@/components/Button';
import CardMain from '@/components/CardMain';
import Carousel from '@/components/Carousel';
import ColoredTitle from '@/components/ColoredTitle';
import Quotes from '@/components/Quotes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [matches, setMaches] = useState(null);
  const [renderWindow, setRenderWindow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    setMaches(mediaQuery.matches);
    mediaQuery.addEventListener('change', (e) => {
      setMaches(e.matches);
    });
    setRenderWindow(typeof window !== 'undefined');
  }, []);

  return (
    <>
      <header className="h-[calc(100vh-100px)] flex flex-row items-center m-auto md:px-20 md:h-full md:mt-8 mb-24">
        <div className="flex flex-col items-center m-auto relative">
          <h1 className="text-center">Bolos feitos com amor</h1>
          {renderWindow && (
            <>
              <Carousel
                arrImage={
                  matches ? objMainCarouselDesktop : objMainCarouselMobile
                }
                alt="Fatia de bolo"
              />
              <div className="xl:absolute xl:bottom-1/4">
                <Button
                  alternative
                  text="Ver cardápio"
                  href="/cardapio"
                  margin="mt-0"
                  absolute
                />
              </div>
            </>
          )}
        </div>
      </header>
      <main className="space-y-24">
        <section className="container-mobile xl:max-w-[1280px] xl:m-auto">
          <div className="flex flex-col items-center text-center gap-7 md:px-0 xl:grid xl:grid-flow-row xl:place-items-center xl:gap-10">
            <h1 className="text-center w-9/12 tracking-wider leading-snug xl:col-start-2">
              Oi, eu sou a Jeniffer !
            </h1>
            <Image
              className="w-8/12 xl:row-start-1 xl:row-span-2 xl:min-w-[400px]"
              src={profile}
              alt="Jeniffer segurando bolo"
            />
            <div className="flex flex-col items-center xl:w-[450px]">
              <Quotes
                firstParagraph="Trabalho com confeitaria profissional há mais de 2 anos."
                secondParagraph="O que me dá mais satisfação é ver a alegria no rosto dos meus
              clientes."
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 py-2 mt-6 w-11/12 m-auto text-center text-2xl font-semibold md:py-8 md:text-3xl bg-white text-red-strong md:w-full">
          <span className="p-4 ">
            1000 +<br />
            bolos entregues
          </span>
          <span className="p-4">
            500 +<br />
            clientes felizes
          </span>
        </div>
        <section className="grid grid-rows-2 gap-24 container-mobile md:grid-rows-1 md:grid-cols-2 md:gap-2 xl:grid-cols-1">
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
        </section>
        <section className="flex flex-col gap-7 container-mobile">
          <ColoredTitle
            bgColor="pink"
            title="O sabor que todos Amam"
            calligraphy
          />
          <Carousel alt="testemunha" arrImage={objTestimonials} />
        </section>
        <section className="flex flex-col items-center container-mobile">
          <ColoredTitle
            bgColor="green"
            title="Saboreie a Felicidade"
            calligraphy
          />
          <div className="flex flex-col items-center gap-12 pt-12 xl:bg-candy-green xl:w-full xl:flex-row xl:p-12 xl:justify-evenly 2xl:justify-center">
            {renderWindow && (
              <Image
                className="xl:max-h-[600px] 2xl:max-w-[800px]"
                src={
                  typeof window !== 'undefined' &&
                  (matches ? callToActionDesktop : callToAction)
                }
                alt="imagem de bolo com oferta"
              />
            )}
            <Button
              text="fazer pedido"
              href="/cardapio"
              alternative
              margin="xl:m-0"
            />
          </div>
        </section>
      </main>
    </>
  );
}
