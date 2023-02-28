import FOrder from '@/components/Form/FOrder';
import Image from 'next/image';
import phoneICon from '@/assets/images/icons/phone-icon.svg';
import pixIcon from '@/assets/images/icons/pix-icon.svg';
import cashIcon from '@/assets/images/icons/cash-icon.svg';
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
        <section className="flex flex-col -mt-10 gap-5 text-center text-lg">
          <span className="font-bold">Ou Ligue</span>
          <span>
            <Image
              className="inline-block mr-4"
              src={phoneICon}
              alt="phone icon"
              width={40}
              height={40}
            />
            (18) 99639-4369
          </span>
        </section>
        <section className="grid grid-cols-2 gap-5 -mt-10 place-items-center">
          <h3 className="text-2xl col-span-2">Formas de pagamento</h3>
          <Image src={pixIcon} alt="pix icon" width={40} height={40} />
          <Image src={cashIcon} alt="cash icon" width={40} height={40} />
          <span>pix</span>
          <span>dinheiro</span>
        </section>
      </main>
    </>
  );
}
