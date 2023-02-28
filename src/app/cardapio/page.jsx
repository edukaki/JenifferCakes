import FOrder from '@/components/Form/FOrder';
import Image from 'next/image';
import phoneICon from '@/assets/images/icons/phone-icon.svg';
export default function cardapio() {
  return (
    <>
      <header>
        <h1 className="text-center tracking-wider leading-snug py-9">
          Cardápio
        </h1>
      </header>
      <main>
        <FOrder />
        <section className="flex flex-col -mt-8 gap-5 text-center text-lg">
          <span className="font-bold">Ou Ligue</span>
          <span>
            <Image
              className="inline-block mr-4"
              src={phoneICon}
              alt="phone icon"
            />
            (18) 99639-4369
          </span>
        </section>
      </main>
    </>
  );
}
