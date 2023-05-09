import { Link } from "react-router-dom";
import Button from "./Button";
import SpecialCard from "./SpecialCard";
import Special1 from "../assets/salad.jpg";
import Special2 from "../assets/sandwich.jpg";
import Special3 from "../assets/pasta.jpg";

const specials = [
  {
    id: "s1",
    image: Special1,
    title: "Greek Salad",
    price: 12.99,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "s2",
    image: Special2,
    title: "Sandwich",
    price: 5.99,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "s3",
    image: Special3,
    title: "Pasta",
    price: 10.0,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Specials() {
  return (
    <section className="specials-section">
      <header>
        <h2>Specials</h2>
        <Link to="/menu">
          <Button>Menu</Button>
        </Link>
      </header>
      <div className="cards">
        {specials.map((special) => (
          <SpecialCard
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </section>
  );
}
