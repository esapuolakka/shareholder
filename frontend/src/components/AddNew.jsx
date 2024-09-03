import React from "react";
import styles from "./Addnew.module.css";

const SelectPerson = ({ persons }) => (
  <select
    style={{
      fontFamily: "var(--font-family)",
      fontSize: "1.2rem",
      fontWeight: "300",
    }}
  >
    <option value="">Valitse henkilö</option>
    {persons.map((person) => {
      const { id, firstname, lastname } = person;
      return (
        <option key={id} value={id}>
          {firstname} {lastname}
        </option>
      );
    })}
  </select>
);

const AddNew = ({ persons }) => {
  return (
    <>
      <section className={styles.AddNew}>
        <div className={styles.addBox}>
          <h2>Osakemyynti</h2>
          <form className={styles.generalItemContainer}>
            <div className={styles.formRow}>
              <label> Luovuttaja/ Myyjä</label>
              <SelectPerson persons={persons} />
            </div>
            <div className={styles.formRow}>
              <label>Saaja/ Ostaja</label>
              <SelectPerson persons={persons} />
            </div>
            <div className={styles.inlineFormRow}>
              <div>
                <label>Saantopäivä</label>
                <input />
              </div>
              <div>
                <label>Maksupäivä</label>
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
          <h2>Osakkeenomistaja</h2>
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
