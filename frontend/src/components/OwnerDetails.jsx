import React from "react";
import styles from "./ContainerLayout.module.css"; // Päivitetty import

const OwnerDetails = ({ owner }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        {owner.firstname} {owner.lastname}
      </h2>

      <div className={styles["details-item"]}>
        <p>
          <strong>Osakkaan numero:</strong> {owner.id}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Etunimi Sukunimi/Yrityksen nimi: {owner.firstname} {owner.lastname}
        </p>
      </div>

      <div className={styles["small-box"]}>
        <p>
          <strong>Osakkeiden määrä:</strong> {owner.numberOfShares}
        </p>
      </div>
      <div className={styles["small-box"]}>
        <p>
          <strong>Omistusprosentti:</strong> {owner.ownershipPercentage}
        </p>
      </div>

      {owner.shareNumbers.map((range, index) => (
        <div key={index} className={styles["share-number-box"]}>
          <p>
            <strong>Osakenumerot alkaen - osakenumerot loppuen:</strong>{" "}
            {range.beginning} - {range.ending}
          </p>
          <p>
            <strong>Saantopäivä:</strong> {owner.collectionDate}
          </p>
          <p>
            <strong>Maksupäivä:</strong> {owner.term}
          </p>
          <p>
            <strong>Varainsiirtovero:</strong>{" "}
            {owner.transferTaxPaid ? "Maksettu" : "Ei maksettu"}
          </p>
        </div>
      ))}

      <div className={styles["details-item"]}>
        <p>
          <strong>Henkilötunnus/Y-tunnus:</strong> {owner.personalIdentityCode}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          <strong>Kotipaikka:</strong> {owner.city}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          <strong>Yhteystiedot:</strong> {owner.address}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          <strong>Sähköposti:</strong> {owner.email}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          <strong>Puhelinnumero:</strong> {owner.phone}
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          <strong>Tilinumero:</strong> {owner.accountNumber}
        </p>
      </div>
    </div>
  );
};

export default OwnerDetails;
