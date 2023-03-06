import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Carousel as ImgViewer } from 'react-responsive-carousel';

import Quotes from '../Quotes';

export default function Carousel(props) {
  return (
    <ImgViewer
      className="rounded-lg pt-9 pb-4"
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
      {props.arrImage.map((obj, index) => (
        <div
          key={index}
          className={`flex flex-col items-center pb-12 ${
            obj.name ? 'xl:flex-row xl:gap-10 xl:justify-center' : ''
          }`}
        >
          <Image
            className={`${
              obj.name && 'rounded-full max-w-[190px] md:max-w-[400px]'
            }`}
            src={obj.img}
            alt={props.alt}
          />
          {obj.name && (
            <div className="flex flex-col items-center xl:flex-col-reverse xl:w-5/12">
              <span className="text-2xl font-semibold pb-10 pt-5 md:text-3xl">
                {obj.name}
              </span>
              <Quotes firstParagraph={obj.quote} />
            </div>
          )}
        </div>
      ))}
    </ImgViewer>
  );
}

Carousel.propTypes = {
  arrImage: PropTypes.array.isRequired,
  alt: PropTypes.string,
};
