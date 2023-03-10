import facebook from '@/assets/images/icons/facebook-icon.svg';
import instagram from '@/assets/images/icons/instagram-icon.svg';
import whatsapp from '@/assets/images/icons/whatsapp-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const socials = [
    {
      href: 'https://instagram.com/jeniffer_santos_cassajus?igshid=YmMyMTA2M2Y=',
      src: instagram,
      alt: 'Instagram logo',
    },
    {
      href: 'https://www.facebook.com/jeniffersantos.santos.75?mibextid=LQQJ4d',
      src: facebook,
      alt: 'Facebook logo',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=5518996394369',
      src: whatsapp,
      alt: 'WhatsApp logo',
    },
  ];

  return (
    <footer className="text-center container-mobile">
      <div className="bg-white">
        <h2 className="pt-5 font-montserrat text-base font-semibold">
          Entre em contato
        </h2>
        <ul className="flex flex-row justify-center pt-5 pb-8">
          {socials.map((social, index) => (
            <li className="px-4" key={index}>
              <Link className="px-14" target="_blank" href={social.href}>
                <Image
                  className="w-10 m-auto"
                  src={social.src}
                  alt={social.alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs py-5">
        <i className="fa-regular fa-copyright"></i> Jennifer Cakes. Todos os
        direitos reservados.{' '}
      </p>
    </footer>
  );
}
