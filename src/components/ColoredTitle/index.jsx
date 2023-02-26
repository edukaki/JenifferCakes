import PropTypes from 'prop-types';

export default function ColoredTitle(props) {
  return (
    <div
      className={`${
        props.calligraphy ? 'px-10 py-8' : 'px-8 py-4'
      } w-full text-center ${
        props.bgColor === 'green'
          ? 'bg-candy-green'
          : props.bgColor === 'pink'
          ? 'bg-candy-pink'
          : ''
      }`}
    >
      {props.calligraphy ? <h2>{props.title}</h2> : <h3>{props.title}</h3>}
    </div>
  );
}

ColoredTitle.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  calligraphy: PropTypes.bool,
};
