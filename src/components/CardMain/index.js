import Image from 'next/image';
import PropTypes from 'prop-types';

export default function CardMain(props) {
  const color =
    props.color === 'green'
      ? 'bg-candy-green'
      : props.color === 'pink'
      ? 'bg-candy-pink'
      : '';
  return (
    <section className="flex flex-col justify-center min-h-screen text-center relative md:min-h-fit md:h-full md:py-24 xl:grid xl:p-8 xl:w-10/12 xl:m-auto xl:max-w-[1280px]">
      <div className="absolute grid grid-cols-2 h-full w-full -z-50">
        <div
          className={`${
            props.left
              ? 'col-start-1 md:col-span-2'
              : props.right
              ? 'col-start-2 md:col-span-2'
              : ''
          } ${color}`}
        ></div>
      </div>
      <h2
        className={`pt-4 pb-11 ${
          props.left ? 'xl:col-start-1' : 'xl:col-start-2'
        }`}
      >
        {props.title}
      </h2>
      <Image
        className={`w-full md:px-2 ${
          props.left ? 'xl:col-start-2' : 'xl:col-start-1'
        } xl:row-start-1 xl:row-span-3`}
        src={props.src}
        alt={props.alt}
      />
      <div className="md:px-4">
        <div className="flex flex-col items-center p-5 mt-16 mb-10 bg-light-beige md:rounded-md xl:w-10/12 xl:pt-6 xl:pb-10 xl:m-auto">
          <h3 className="tracking-wider">{props.subtitle}</h3>
          <div className={`w-28 h-1 my-4 rounded-full ${color}`} />
          <p className="w-11/12">{props.text}</p>
        </div>
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
  left: PropTypes.bool,
  right: PropTypes.bool,
};
