import { Link } from "react-router-dom";
import Button from "./Button";
import Specials from "./Specials";
import Food from "../assets/food.jpg";

export default function Home() {
  return (
    <>
      <section className="main-left">
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <article>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </article>
        <Link to="/reservations">
          <Button aria-label="Reserve a Table">Reserve a Table</Button>
        </Link>
      </section>
      <aside className="main-right">
        <img src={Food} alt="Food" />
      </aside>
    </>
  );
}
