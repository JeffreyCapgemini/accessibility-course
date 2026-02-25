import './Search.scss';
import searchIcon from "../../assets/searchIcon.svg"

export default function Search() {
  return (
    <nav className="topnav">
      <div className="search-container">
        <form className="search-bar is-open" role="search" action="/zoeken">
          <label className="search-bar__label">Zoeken</label>
          <div className="search-bar__input-container">
            <input
              type="text"
              className="text-input search-bar__input"
              name="q"
            />
          </div>
          <button
            className="button button--medium button--default has-icon-only search-bar__submit-button"
            aria-label="Zoeken"
            type="submit"
          >
            <img src={searchIcon} alt="" />
          </button>
        </form>
        <h1>Toegankelijkheidsevenement Capgemini</h1>
      </div>
    </nav>
  );
}
