import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <Link
      href={props.href}
      className={`py-3 px-8 shadow-lg ${
        props.margin ? props.margin : 'm-auto'
      } ${
        props.alternative
          ? 'bg-candy-green hover:bg-white hover:border-candy-green hover:border'
          : 'bg-green-600 hover:opacity-70'
      } `}
    >
      {props.text}
    </Link>
  );
}

Button.propTypes = {
  margin: PropTypes.string,
  alternative: PropTypes.bool,
  text: PropTypes.string,
  href: PropTypes.string,
};
