import { useState } from "react";
import "./Modal.css";
import closeIcon from "../../assets/closeIcon.svg";

export default function ModalAssignment() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page">
      <h1>Welkom bij het toegankelijkheidsevenement</h1>

      <button className="open-modal-button" onClick={() => setIsOpen(true)}>
        Druk hier om je aan te melden
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Meld je aan </h3>

              <div className="modal__close" onClick={() => setIsOpen(false)}>
                <img src={closeIcon} />
              </div>
            </div>

            <div className="modal__content">
              <p>
                Vul het formulier in om je aan te melden voor dit prachtige
                event.
              </p>

              <div className="form-group">
                <span>Naam</span>
                <input type="text" />
              </div>

              <div className="form-group">
                <span>Email</span>
                <input type="text" />
              </div>

              <div className="form-group">
                <input type="checkbox" />
                <span>Ik ga akkoord met de voorwaarden</span>
              </div>

              <div className="modal__actions">
                <div
                  className="button primary"
                  onClick={() =>
                    alert(
                      "Bedankt voor je gegevens, je bent zojuist opgelicht!",
                    )
                  }
                >
                  Verzenden
                </div>

                <div
                  className="button secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Annuleren
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <p>Klik hier voor meer informatie</p>

      <a href="https://www.capgemini.com">Meer informatie</a>
    </div>
  );
}
