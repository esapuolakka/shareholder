import React, { useState } from "react";
import axios from "axios";
import styles from "./OwnerDetails.module.css";

const SelectPerson = ({ owners, onChange }) => (
  <select onChange={(e) => onChange(e.target.value)}>
    <option value="">Valitse henkilö</option>
    {owners.map((owner) => {
      const { id, firstname, lastname } = owner;
      return (
        <option key={id} value={id}>
          {firstname} {lastname}
        </option>
      );
    })}
  </select>
);

const OwnerDetails = ({ owners }) => {
  const [isEditing, setIsEditing] = useState(false); // Muokkaustilan hallinta
  const [selectedOwner, setSelectedOwner] = useState(null); // Valittu henkilö
  const [editedOwner, setEditedOwner] = useState(null); // Muokkaustila

  // const refreshOwners = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/persons");
  //     setOwners(response.data); // Päivitetään omistajat
  //     if (selectedOwner) {
  //       const updatedOwner = response.data.find(
  //         (o) => o.id === selectedOwner.id
  //       );
  //       setSelectedOwner(updatedOwner); // Päivitä valittu henkilö
  //     }
  //   } catch (error) {
  //     console.error("Tietojen hakeminen epäonnistui", error);
  //   }
  // };

  const handlePersonChange = (personId) => {
    const owner = owners.find((o) => o.id === parseInt(personId));
    setSelectedOwner(owner);
    setEditedOwner(owner); // Alustetaan muokkaustila valitulla henkilöllä
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOwner((prevOwner) => ({
      ...prevOwner,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (JSON.stringify(editedOwner) !== JSON.stringify(selectedOwner)) {
      try {
        await axios.put(
          `http://localhost:8080/api/persons/${editedOwner.id}`,
          editedOwner
        );
        setSelectedOwner(editedOwner); // Päivitä valittu omistaja
        setIsEditing(false); // Poistu muokkaustilasta
      } catch (error) {
        console.error("Tietojen päivittäminen epäonnistui", error);
      }
    } else {
      console.log("Ei muutoksia tallennettavaksi.");
    }
  };

  const handleCancel = () => {
    setEditedOwner(selectedOwner); // Palauta alkuperäiset tiedot
    setIsEditing(false); // Poistu muokkaustilasta
  };

  return (
    <>
      {/* Pudotusvalikko henkilön valitsemiseen */}
      <SelectPerson owners={owners} onChange={handlePersonChange} />

      {/* Näytetään valitun henkilön tiedot, jos henkilö on valittu */}
      {selectedOwner && (
        <div className={styles.generalItemContainer}>
          <div className={styles.detailsItem}>
            <label>Osakkaan numero:</label>
            <span className={styles.nextRow}>{selectedOwner.id}</span>
          </div>

          {isEditing ? (
            <>
              <div className={styles.detailsItem}>
                <label>Nimi/Yrityksen nimi:</label>
                <input
                  type="text"
                  name="firstname"
                  value={editedOwner.firstname}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastname"
                  value={editedOwner.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.detailsItem}>
                <label>Etunimi Sukunimi/Yrityksen nimi:</label>
                <span className={styles.nextRow}>
                  {selectedOwner.firstname} {selectedOwner.lastname}
                </span>
              </div>
            </>
          )}

          <div className={styles.smallerBoxContainerFlex}>
            <div className={styles.generalSmallerBox}>
              <label>Osakkeiden määrä: </label>
              <span>{selectedOwner.numberOfShares}</span>
            </div>
            <div className={styles.generalSmallerBox}>
              <label>Omistusprosentti: </label>
              <span>{selectedOwner.ownershipPercentage}%</span>
            </div>
          </div>

          <div className={styles.shareNumberBoxContainerFlex}>
            {selectedOwner.shareNumbers.map((range, index) => (
              <div
                key={index}
                className={`${styles.generalSmallerBox} ${styles.fullWidth}`}
              >
                <div>
                  <label>Osakenumerot alkaen - loppuen: </label>
                  <span className={styles.nextRow}>
                    {range.beginning} - {range.ending}
                  </span>
                </div>
                <div>
                  <label>Saantopäivä: </label>
                  <span className={styles.nextRow}>
                    {selectedOwner.collectionDate}
                  </span>
                </div>
                <div>
                  <label>Maksupäivä: </label>
                  <span className={styles.nextRow}>{selectedOwner.term}</span>
                </div>
                <div>
                  <label>Varainsiirtovero: </label>
                  <span className={styles.nextRow}>
                    {selectedOwner.transferTaxPaid ? "Maksettu" : "Ei maksettu"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Näytetään yhteystiedot myös, kun ei olla muokkaustilassa */}
          <div className={styles.detailsItem}>
            <label>Henkilötunnus/Y-tunnus:</label>
            {isEditing ? (
              <input
                type="text"
                name="personalIdentityCode"
                value={editedOwner.personalIdentityCode}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>
                {selectedOwner.personalIdentityCode}
              </span>
            )}
          </div>

          <div className={styles.detailsItem}>
            <label>Kotipaikka:</label>
            {isEditing ? (
              <input
                type="text"
                name="city"
                value={editedOwner.city}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>{selectedOwner.city}</span>
            )}
          </div>

          <div className={styles.detailsItem}>
            <label>Yhteystiedot:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={editedOwner.address}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>{selectedOwner.address}</span>
            )}
          </div>

          <div className={styles.detailsItem}>
            <label>Sähköposti:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedOwner.email}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>{selectedOwner.email}</span>
            )}
          </div>

          <div className={styles.detailsItem}>
            <label>Puhelinnumero:</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editedOwner.phone}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>{selectedOwner.phone}</span>
            )}
          </div>

          <div className={styles.detailsItem}>
            <label>Tilinumero:</label>
            {isEditing ? (
              <input
                type="text"
                name="accountNumber"
                value={editedOwner.accountNumber}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>
                {selectedOwner.accountNumber}
              </span>
            )}
          </div>

          {isEditing ? (
            <>
              <div>
                <button className={styles.styledButton} onClick={handleSave}>
                  Tallenna
                </button>
                <button className={styles.styledButton} onClick={handleCancel}>
                  Peruuta
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  className={styles.styledButton}
                  onClick={() => setIsEditing(true)}
                >
                  Muokkaa tietoja
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default OwnerDetails;
