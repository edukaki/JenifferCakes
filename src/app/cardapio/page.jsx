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
        <section className="grid grid-cols-2 gap-5 pt-20 pb-12 place-items-center">
          <h3 className="text-2xl col-span-2 text-center">
            Formas de pagamento
          </h3>
          <Image src={pixIcon} alt="pix icon" width={40} height={40} />
          <Image src={cashIcon} alt="cash icon" width={40} height={40} />
          <span>pix</span>
          <span>dinheiro</span>
        </section>
        <section className="flex flex-col text-center">
          <h3 className="text-2xl col-span-2 text-center">Endereço</h3>

          <iframe
            className="w-full h-[400px] pt-5 pb-2"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=-22.296151362665796%2C%20-51.38250372938472&key=${process.env.MAPS_API_KEY}`}
          ></iframe>
          <p>
            Rua Antônio Yoshito Matsumoto, 300,
            <br />
            Bairro Centro
            <br />
            Anhumas - SP, Brasil
          </p>
          <span className="mt-5">
            <Image
              className="inline-block mr-4"
              src={phoneICon}
              alt="phone icon"
              width={25}
              height={25}
            />
            (18) 99639-4369
          </span>
        </section>
      </main>
    </>
  );
}
