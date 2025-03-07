import styles from "./Header.module.css";
import { Search, BagFill, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Freaky_Fashion_logo from "../../assets/Freaky_Fashion_logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.headerContent}>
          {/* <!-- Logotyp --> */}
          <Link to="/">
            <img src={Freaky_Fashion_logo} alt="Logotyp" />
          </Link>

          {/* <!-- Sökruta, syftet med aria-label är för att ge info till skärmläsare --> */}
          <div className={styles.searchContainer}>
            {/* <!-- anropet skickas till /search --> */}
            <form
              className={styles.searchBar}
              id="search-bar"
              action="/search"
              method="get"
            >
              <input
                type="search"
                id="search"
                placeholder="Sök produkter..."
                aria-label="Sök produkter"
              />
              <Search className={styles.searchIcon} />{" "}
            </form>

            {/* <!-- Ikoner för favoriter och varukorg --> */}
            <div className={styles.headerIcons}>
              <Link to="/" aria-label="Favoriter">
              <HeartFill className={styles.icon} />

              </Link>
              <Link to="/checkout" aria-label="Varukorg">
              <BagFill className={styles.icon} />

              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Kategorier --> */}
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/nyheter">Nyheter</Link>
            </li>
            <li>
              <Link to="/topplistan">Topplistan</Link>
            </li>
            <li>
              <Link to="/rea">Rea</Link>
            </li>
            <li>
              <Link to="/kampanjer">Kampanjer</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
