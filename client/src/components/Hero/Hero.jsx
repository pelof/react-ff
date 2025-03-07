import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroimage from "../../assets/heroimage.svg";


export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <Link to="/products/svart-t-shirt">
          <img src={heroimage} alt="Heroprodukt" />
        </Link>
        <div>
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            doloribus, nulla totam at ipsa voluptatum possimus vel
            necessitatibus officiis!
          </p>
        </div>
      </section>
    </>
  );
}
