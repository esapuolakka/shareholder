import React, { useState } from "react";
import api from "../api";
import styles from "./Addnew.module.css";

const AddNewPersonForm = () => {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    ssn: "",
    city: "",
    address: "",
    postalCode: "",
    email: "",
    phone: "",
    bankAccount: "",
    numberOfShares: 0, //with fraction functionality this should be 0.0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: name === "numberOfShares" ? parseInt(value) || 0 : value, // because backend Integer
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/persons/add", person);
      alert("Uusi osakkeenomistaja on lisätty onnistuneesti tietokantaan.");
      // Reset form
      setPerson({
        firstname: "",
        lastname: "",
        ssn: "",
        city: "",
        address: "",
        postalCode: "",
        email: "",
        phone: "",
        bankAccount: "",
        numberOfShares: 0,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error in backend:", error.response.data);
      } else {
        console.error("Unknown error:", error);
      }
      alert(
        "Virhe lisättäessä osakkeenomistajaa. Tarkista tiedot ja yritä uudelleen."
      );
    }
  };

  return (
    <div className={styles.addBox}>
      <h2>Lisää uusi osakkeenomistaja</h2>
      <form className={styles.generalItemContainer} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label>Osakkaan nimi/ Yrityksen nimi:</label>
          <input
            name="firstname"
            value={person.firstname}
            onChange={handleChange}
            placeholder="Etunimi/ Yrityksen nimi"
            required
          />
          <input
            name="lastname"
            value={person.lastname}
            onChange={handleChange}
            placeholder="Sukunimi"
            required
          />
        </div>

        <div className={styles.formRow}>
          <label>Henkilötunnus/ Y-tunnus:</label>
          <input
            name="ssn"
            value={person.ssn}
            onChange={handleChange}
            placeholder="Henkilötunnus/ Y-tunnus"
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>Kotipaikka:</label>
          <input
            name="city"
            value={person.city}
            onChange={handleChange}
            placeholder="Kaupunki"
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>Yhteystiedot:</label>
          <input
            name="address"
            value={person.address}
            onChange={handleChange}
            placeholder="Osoite"
            required
          />
          <input
            name="postalCode"
            value={person.postalCode}
            onChange={handleChange}
            placeholder="Postinumero"
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>Sähköposti:</label>
          <input
            name="email"
            type="email"
            value={person.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>Puhelinnumero:</label>
          <input
            name="phone"
            value={person.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>Tilinumero:</label>
          <input
            name="bankAccount"
            value={person.bankAccount}
            onChange={handleChange}
            placeholder="Tilinumero"
            required
          />
        </div>
        <div className={styles.formRow}>
          <label>
            Omistuksessa olevien osakkeiden kokonaismäärä, jos niitä on:
          </label>
          <input
            name="numberOfShares"
            type="number"
            value={person.numberOfShares}
            onChange={handleChange}
            min="0" // no negative values
            // step="0.01" // 1/2 ownership NOT possible now
            placeholder="Osakkeiden kokonaismäärä"
            required
          />
        </div>
        <div className={styles.formRow}>
          <button className={styles.styledButton} type="submit">
            Lisää uusi osakkeenomistaja
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewPersonForm;
