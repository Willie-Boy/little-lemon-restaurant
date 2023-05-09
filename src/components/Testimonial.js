import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars({ numberOfStars }) {
  const integerPart = Math.trunc(numberOfStars);
  const decimalPart = Number(numberOfStars.toString().split(".")[1]);
  const elements = [];

  if (integerPart <= 0) {
    elements.push(0);
  } else {
    for (let index = 1; index <= integerPart; index++) {
      if (index > 5) {
        break;
      }
      elements.push(0);
    }
  }

  return (
    <div className="stars-container">
      {elements.map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {integerPart < 5 && decimalPart > 0 && (
        <FontAwesomeIcon icon={faStarHalf} />
      )}
    </div>
  );
}

export default function Testimonial({ image, name, stars, quote }) {
  return (
    <article className="testimonial">
      <div className="user-image">
        <img src={image} alt="User image" />
      </div>
      <div className="stars">
        <Stars numberOfStars={stars} />
        <span>{stars}</span>
      </div>
      <figure className="quotation">
        <blockquote>{quote}</blockquote>
        <figcaption>&mdash; {name}</figcaption>
      </figure>
    </article>
  );
}
