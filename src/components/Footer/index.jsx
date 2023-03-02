import Image from 'next/image';
import instagram from '@/assets/images/icons/instagram-icon.svg';
import facebook from '@/assets/images/icons/facebook-icon.svg';
import whatsapp from '@/assets/images/icons/whatsapp-icon.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center mx-4">
      <div className="bg-white">
        <h2 className="pt-5 font-montserrat text-base font-semibold">
          Entre em contato
        </h2>
        <ul className="flex flex-row justify-center pt-5 pb-8">
          <li>
            <Link
              target="_blank"
              href="https://instagram.com/jeniffer_santos_cassajus?igshid=YmMyMTA2M2Y="
            >
              <Image src={instagram} alt="Instagram logo" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.facebook.com/jeniffersantos.santos.75?mibextid=LQQJ4d"
            >
              <Image className="mx-6" src={facebook} alt="Facebook logo" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5518996394369"
            >
              <Image src={whatsapp} alt="WhatsApp logo" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-xs py-5">
        <i className="fa-regular fa-copyright"></i> Jennifer Cakes. Todos os
        direitos reservados.{' '}
      </p>
    </footer>
  );
}
