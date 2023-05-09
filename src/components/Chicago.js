import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarioAndAdrian1 from "../assets/mario-and-adrian-1.jpg";
import MarioAndAdrian2 from "../assets/mario-and-adrian-2.jpg";

export default function Chicago() {
  return (
    <section className="chicago-section">
      <div>
        <h2>Our story</h2>
        <div className="about">
          <div className="about-text">
            <div className="display-title">Little Lemon</div>
            <div className="display-subtitle">Chicago</div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ad cumque labore recusandae vero a quas repellat perferendis
                sint? Dolorum, tempore ratione fugiat illum ullam officia
                aliquid delectus quos! Accusantium. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Maxime quibusdam fugit iure
                autem! Magnam animi laboriosam assumenda vero eos a dolores,
                itaque repellendus fuga ab, ipsam reiciendis non vitae ut.
              </p>
            </div>
          </div>
          <div className="images-collage">
            <div className="left-image-container">
              <div>
                <img src={MarioAndAdrian2} alt="Mario and Adrian" />
              </div>
            </div>
            <div className="right-image-container">
              <div>
                <img src={MarioAndAdrian1} alt="Mario and Adrian" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
