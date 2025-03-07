import "./Header.css";
import {Search} from 'react-bootstrap-icons';


export default function Header() {
  return (
    <>
      <header>
        <div class="header-content">
          {/* <!-- Logotyp --> */}
          {/* TODO: Link istället? */}
          <a href="/">
            <img src="src/assets/Freaky_Fashion_logo.png" alt="Logotyp" />
          </a>

          {/* <!-- Sökruta, syftet med aria-label är för att ge info till skärmläsare --> */}
          <div>
            {/* <!-- anropet skickas till /search --> */}
            <form
              class="search-bar"
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
              <i class="bi bi-search"><Search></Search></i>
            </form>

            {/* <!-- Ikoner för favoriter och varukorg --> */}
            <div class="header-icons">
              <a href="/" aria-label="Favoriter">
                <i class="bi bi-heart-fill"></i>
              </a>
              <a href="/checkout" aria-label="Varukorg">
                <i class="bi bi-bag-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Kategorier --> */}
        <nav>
          <ul class="nav-links">
            <li>
              <a href="/nyheter">Nyheter</a>
            </li>
            <li>
              <a href="/topplistan">Topplistan</a>
            </li>
            <li>
              <a href="/rea">Rea</a>
            </li>
            <li>
              <a href="/kampanjer">Kampanjer</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
