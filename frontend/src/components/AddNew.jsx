import React from "react";
import styles from "./Addnew.module.css";

const AddNew = ({ shareholders }) => {
  return (
    <>
      <section className={styles.AddNew}>
        <div className={styles.addBox}>
          <p>Lisää uusi osakemyynti</p>
          <form className={styles.generalItemContainer}>
            <div className={styles.formRow}>
              <label> Luovuttajan/Myyjä</label>
              <select>
                <option value="">Valitse henkilö</option>
                {shareholders.map((shareholder) => {
                  const { id, firstname, lastname } = shareholder.buyer;
                  return (
                    <option key={id} value={id}>
                      {firstname} {lastname}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.formRow}>
              <label>Saajan/Ostaja</label>
              <select>
                <option value="">Valitse henkilö</option>
                {shareholders.map((shareholder) => {
                  const { id, firstname, lastname } = shareholder.seller;
                  return (
                    <option key={id} value={id}>
                      {firstname} {lastname}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.inlineFormRow}>
              <div>
                <label>Saantopäivä</label>
                <input />
              </div>
              <div>
                <label>Maksupäivä?</label>
                <input />
              </div>
            </div>
            <div className={styles.inlineFormRow}>
              <div>
                <label>Osakenumerot alkaen</label>
                <input />
              </div>
              <div>
                <label>Osakenumerot loppuen</label>
                <input />
              </div>
            </div>
            <div className={styles.formRow}>
              <label>Osakkeiden määrä</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Hinta per osake</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>EUR</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Huomioitavaa</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <button className={styles.styledButton}>Lisää</button>
            </div>
          </form>
        </div>
        <div className={styles.addBox}>
          <p>Lisää uusi osakkeenomistaja</p>
          <form className={styles.generalItemContainer}>
            <div className={styles.formRow}>
              <label>Osakkaan numero</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Henkilötunnus/ Y-tunnus</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Kotipaikka</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Yhteystiedot</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Sähköposti</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Puhelinnumero</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Tilinumero</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <button className={styles.styledButton}>Lisää</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNew;
