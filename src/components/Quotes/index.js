import PropTypes from 'prop-types';

export default function Quotes(props) {
  return (
    <div className="flex flex-col items-center text-xl w-11/12 md:w-8/12 xl:w-fit">
      <span className="text-7xl -mb-9 text-left w-full">“</span>
      <p className={`px-4 ${props.secondParagraph && 'pb-8'} md:text-2xl`}>
        {props.firstParagraph}
      </p>
      {props.secondParagraph && (
        <p className="px-4 md:text-2xl">{props.secondParagraph}</p>
      )}
      <span className="text-7xl -mb-10 text-right w-full">”</span>
    </div>
  );
}

Quotes.propTypes = {
  firstParagraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string,
};
