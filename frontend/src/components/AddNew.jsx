import React, { useState, useEffect } from "react";
import styles from "./Addnew.module.css";

const SelectPerson = ({ persons }) => (
  <select>
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
  const [sharesStart, setSharesStart] = useState("");
  const [sharesEnd, setSharesEnd] = useState("");
  const [pricePerShare, setPricePerShare] = useState("");
  const [shareCount, setShareCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // share count
  useEffect(() => {
    if (sharesStart && sharesEnd) {
      const count = Math.max(0, sharesEnd - sharesStart + 1);
      setShareCount(count);
    } else {
      setShareCount(0);
    }
  }, [sharesStart, sharesEnd]);
  // total
  useEffect(() => {
    if (pricePerShare && shareCount) {
      const total = pricePerShare * shareCount;
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [pricePerShare, shareCount]);

  return (
    <>
      <section className={styles.AddNew}>
        <div className={styles.addBox}>
          <h2>Osakemyynti ilmoitus</h2>
          <form className={styles.generalItemContainer}>
            <div className={styles.formRow}>
              <label> Luovuttaja/ Myyjä:</label>
              <SelectPerson persons={persons} />
            </div>
            <div className={styles.formRow}>
              <label>Saaja/ Ostaja:</label>
              <SelectPerson persons={persons} />
            </div>
            <div className={styles.inlineFormRow}>
              <div>
                <label>Saantopäivä:</label>
                <input type="date" />
              </div>
              <div>
                <label>Maksupäivä:</label>
                <input type="date" />
              </div>
            </div>
            <div className={styles.inlineFormRow}>
              <div>
                <label>Osakenumerot alkaen:</label>
                <input
                  type="number"
                  value={sharesStart}
                  onChange={(e) => setSharesStart(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Osakenumerot loppuen:</label>
                <input
                  type="number"
                  value={sharesEnd}
                  onChange={(e) => setSharesEnd(Number(e.target.value))}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <label>Osakkeiden määrä:</label>
              <input type="number" value={shareCount} readOnly />
            </div>
            <div className={styles.formRow}>
              <label>Hinta per osake:</label>
              <input
                type="number"
                step="0.01"
                value={pricePerShare}
                onChange={(e) => setPricePerShare(Number(e.target.value))}
              />
            </div>
            <div className={styles.formRow}>
              <label>EUR:</label>
              <input type="number" value={totalPrice} readOnly />
            </div>
            <div className={styles.formRow}>
              <label>Huomioitavaa:</label>
              <textarea className={styles.formRow} rows="4" />
            </div>
            <div className={styles.formRow}>
              <button className={styles.styledButton}>Lisää</button>
            </div>
          </form>
        </div>
        <div className={styles.addBox}>
          <h2>Osakkeenomistaja</h2>
          <form className={styles.generalItemContainer}>
            {/* <div className={styles.formRow}>
              <label>Osakkaan numero:</label>
              <input
                type="number"
                placeholder="** next free id number shown here **"
                readOnly
              />
            </div> */}
            <div className={styles.formRow}>
              <label>Osakkaan nimi/ Yrityksen nimi:</label>
              <input placeholder="Etunimi/ Yrityksen nimi" />
              <input placeholder="Sukunimi" />
            </div>
            <div className={styles.formRow}>
              <label>Henkilötunnus/ Y-tunnus:</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Kotipaikka:</label>
              <input placeholder="Kaupunki" />
            </div>
            <div className={styles.formRow}>
              <label>Yhteystiedot:</label>
              <input placeholder="Osoite" />
              <input placeholder="Postinumero" />
            </div>
            <div className={styles.formRow}>
              <label>Sähköposti:</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Puhelinnumero:</label>
              <input />
            </div>
            <div className={styles.formRow}>
              <label>Tilinumero:</label>
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
