import PropTypes from 'prop-types';
import Image from 'next/image';

export default function CardMain(props) {
  return (
    <section className="flex flex-col justify-center h-screen text-center relative">
      <div className="absolute grid grid-cols-2 h-full w-full -z-50">
        <div
          className={`${
            props.left ? 'col-start-1' : props.right ? 'col-start-2' : ''
          } ${
            props.color === 'green'
              ? 'bg-candy-green'
              : props.color === 'pink'
              ? 'bg-candy-pink'
              : ''
          }`}
        ></div>
      </div>
      <h2 className="pb-11">{props.title}</h2>
      <Image className="w-full" src={props.src} alt={props.alt} />
      <div className="flex flex-col items-center p-5 mt-16 mb-10 bg-light-beige">
        <h3 className="tracking-wider">{props.subtitle}</h3>
        <div className="w-28 h-1 my-4 rounded-full bg-candy-green" />
        <p className="w-11/12">{props.text}</p>
      </div>
    </section>
  );
}

CardMain.propTypes = {
  alt: PropTypes.string,
  color: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
