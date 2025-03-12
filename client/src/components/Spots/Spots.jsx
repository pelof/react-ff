import {Link} from "react-router-dom";
import styles from "./Spots.module.css";
import image from "../../assets/heroimage.svg";

// TODO med data från db
export default function Spots() {
  return (
    <>
      <section className={styles.spots}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <Link to="/">
                <img src={image} alt="Svart T-Shirt" />
                <div className={styles.spotText}>Svart T-Shirt</div>
              </Link>
            </div>
          ))}
      </section>
      </>
      );
    }
