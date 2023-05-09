import User1 from "../assets/user-1.jpg";
import User2 from "../assets/user-2.jpg";
import User3 from "../assets/user-3.jpg";
import User4 from "../assets/user-4.jpg";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    id: "u1",
    image: User1,
    name: "Clementine C.",
    stars: 4.5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "u2",
    image: User2,
    name: "Mark B.",
    stars: 4.5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "u3",
    image: User3,
    name: "Alvin H.",
    stars: 4,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "u4",
    image: User4,
    name: "Maria C.",
    stars: 5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((item) => (
          <Testimonial
            key={item.id}
            image={item.image}
            name={item.name}
            stars={item.stars}
            quote={item.quote}
          />
        ))}
      </div>
    </section>
  );
}
