'use client';
import Image from 'next/image';
import carousel1 from '../assets/images/mobile/carousel1_head.png';
import carousel2 from '../assets/images/mobile/carousel2_head.png';
import carousel3 from '../assets/images/mobile/carousel3_head.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <header className="container-mobile">
      <Carousel
        className="rounded-lg py-8"
        autoPlay={true}
        showThumbs={false}
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        renderIndicator={(onClickHandler, isSelected, index) => {
          return (
            <span
              className={`w-3 h-3 ${
                isSelected ? 'bg-candy-green' : 'bg-slate-400'
              } inline-block rounded-full cursor-pointer mx-3`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
            />
          );
        }}
      >
        <div>
          <Image src={carousel1} alt="Fatia de bolo" />
        </div>
        <div>
          <Image src={carousel2} alt="Fatia de bolo" />
        </div>
        <div>
          <Image src={carousel3} alt="Fatia de bolo" />
        </div>
      </Carousel>
    </header>
  );
}
