import styles from "./Footer.module.css";
import {
  GlobeCentralSouthAsia,
  RocketTakeoffFill,
  ShieldShaded,
  EmojiLaughingFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AccordionExpandIcon from "../AccordionExpandIcon/AccordionExpandIcon";

export default function Footer() {
  return (
    <>
      <footer>
        {/* 4 ikoner och text för: Gratis frakt och returer, Expressfrakt
       Säkra betalningar och Nyheter varje dag */}
        <ul className={styles.promise}>
          <li>
            <GlobeCentralSouthAsia
              className={styles.promiseIcon}
            ></GlobeCentralSouthAsia>
            <div>Gratis frakt och returer</div>
          </li>
          <li>
            <RocketTakeoffFill
              className={styles.promiseIcon}
            ></RocketTakeoffFill>
            <div>Expressfrakt</div>
          </li>
          <li>
            <ShieldShaded className={styles.promiseIcon}></ShieldShaded>
            <div>Säkra betalningar</div>
          </li>
          <li>
            <EmojiLaughingFill
              className={styles.promiseIcon}
            ></EmojiLaughingFill>
            <div>Nyheter varje dag</div>
          </li>
        </ul>

        {/* Accordion: */}
        <div className={styles.accordionContainer}>
          <AccordionExpandIcon></AccordionExpandIcon>
        </div>

        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link to="/shopping">
                <b>Shopping</b>
              </Link>
            </li>
            <li>
              <Link to="/vinterjackor">Vinterjackor</Link>
            </li>
            <li>
              <Link to="/pufferjackor">Pufferjackor</Link>
            </li>
            <li>
              <Link to="/kappa">Kappa</Link>
            </li>
            <li>
              <Link to="/trenchcoats">Trenchcoats</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/minasidor">
                <b>Mina sidor</b>
              </Link>
            </li>
            <li>
              <Link to="/minaordrar">Mina Ordrar</Link>
            </li>
            <li>
              <Link to="/mittkonto">Mitt Konto</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/kundtjanst">
                <b>Kundtjänst</b>
              </Link>
            </li>
            <li>
              <Link to="/returnpolicy">Returnpolicy</Link>
            </li>
            <li>
              <Link to="/integritetspolicy">Integritetspolicy</Link>
            </li>
          </ul>
        </div>
        <small className={styles.copyright}>&copy; Freaky Fashion</small>
      </footer>
    </>
  );
}
