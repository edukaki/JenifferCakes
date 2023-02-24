import PropTypes from 'prop-types';

export default function ColoredTitle(props) {
  return (
    <div
      className={`px-16 py-8 w-full ${
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
