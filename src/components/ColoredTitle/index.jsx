import PropTypes from 'prop-types';

export default function ColoredTitle(props) {
  return (
    <div
      className={`px-10 py-8 w-full text-center ${
        props.bgColor === 'green'
          ? 'bg-candy-green'
          : props.bgColor === 'pink'
          ? 'bg-candy-pink'
          : ''
      }`}
    >
      <h2>{props.title}</h2>
    </div>
  );
}

ColoredTitle.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
