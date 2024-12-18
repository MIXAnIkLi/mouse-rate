import "./SectionAdvantage.css";
import { Image } from "antd";
import PropTypes from "prop-types";

export default function SectionAdvantage({headline, paragraph, source, alternative, rightImg }) {

  const className = rightImg ? 'advantage': 'advantage advantage--right'

  return (
    <div className= {className}>
      <div className="advantage__text-wraper">
        <h1 className="advantage__text-headline"> {headline} </h1>
        <p  className="advantage__text-paragraph">
        {paragraph}
        </p>
      </div>
      <div className="advantage__img-block">
        <Image
        className="advantage__img"
        width={500}
        height={600}
        src={source}
        alt={alternative}
        preview={false}
        />
      </div>
    </div>
  );
}

SectionAdvantage.propTypes = {
  headline: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  alternative: PropTypes.string.isRequired,
  rightImg: PropTypes.bool
};
