import Button from "./Button";

export default function SpecialCard({ image, title, price, description }) {
  return (
    <article className="card">
      <div className="card-image-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="card-description">
        <div className="intro">
          <span>{title}</span>
          <span>${price}</span>
        </div>
        <p className="description">{description}</p>
        <Button>Order a Delivery</Button>
      </div>
    </article>
  );
}
