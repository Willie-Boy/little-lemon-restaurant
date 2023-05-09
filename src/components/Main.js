import { useLocation } from "react-router-dom";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago from "./Chicago";

export default function Main({ children }) {
  const location = useLocation();

  return (
    <>
      <main className="main">{children}</main>
      {location.pathname === "/" && (
        <>
          <Specials />
          <Testimonials />
          <Chicago />
        </>
      )}
    </>
  );
}
