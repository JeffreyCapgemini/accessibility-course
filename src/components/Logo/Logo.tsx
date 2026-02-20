import './Logo.scss';
import logo from "../../assets/logoRijksoverheid.png"

export default function Logo() {
  return (
      <div className="site-header site-header--rijkshuisstijl">
        <div className="site-header__inner">
          <a href="/" className="site-header__logo-link">
            <figure className="site-header__logo">
              <img src={logo} alt="" className="site-header__logo-image"/>
              <figcaption className="site-header__logo-text">
                <div className="site-header__primary-text">Dienst Publiek en Communicatie</div>
                <div className="site-header__secondary-text">Ministerie van Algemene Zaken</div>
                </figcaption>
            </figure>
          </a>
        </div>
      </div>
  );
};
