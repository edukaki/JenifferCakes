// import Link from 'next/link';
import PropTypes from 'prop-types';
export default function Button(props) {
  return (
    <button
      type={props.type ? props.type : 'button'}
      onClick={() => {
        props.type !== 'submit' && (window.location = props.href);
      }}
      className={`flex flex-row gap-2 items-center py-3 px-8 shadow-lg ${
        props.margin ? props.margin : 'm-auto'
      } ${
        props.alternative
          ? 'bg-salmon hover:bg-white hover:border-sabg-salmon hover:border'
          : 'bg-green-strong hover:opacity-70'
      } ${!props.alternative && 'text-white font-semibold text-xl'}}`}
    >
      {props.text}
      {props.whatsapp && <i className="fa-brands fa-whatsapp fa-lg"></i>}
    </button>
  );
}

Button.propTypes = {
  margin: PropTypes.string,
  alternative: PropTypes.bool,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  whatsapp: PropTypes.bool,
};
