import { Carousel as ImgViewer } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Carousel(props) {
  return (
    <ImgViewer
      className="rounded-lg py-9"
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
      {props.arrImage.map((img, index) => (
        <div key={index}>
          <Image src={img} alt={props.alt} />
        </div>
      ))}
    </ImgViewer>
  );
}

Carousel.propTypes = {
  arrImage: PropTypes.array.isRequired,
  alt: PropTypes.string,
};
