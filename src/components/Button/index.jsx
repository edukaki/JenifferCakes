import Link from 'next/link';
import PropTypes from 'prop-types';
export default function Button(props) {
  return (
    <Link
      href={props.href}
      className={`flex flex-row gap-2 items-center py-3 px-8 shadow-lg ${
        props.margin ? props.margin : 'm-auto'
      } ${
        props.alternative
          ? 'bg-candy-green hover:bg-white hover:border-candy-green hover:border'
          : 'bg-green-strong hover:opacity-70'
      } ${!props.alternative && 'text-white font-semibold text-xl'}}`}
    >
      {props.text}
      {props.whatsapp && <i class="fa-brands fa-whatsapp fa-lg"></i>}
    </Link>
  );
}

Button.propTypes = {
  margin: PropTypes.string,
  alternative: PropTypes.bool,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  whatsapp: PropTypes.bool,
};
