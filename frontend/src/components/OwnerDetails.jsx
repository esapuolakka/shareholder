import React from "react";
import styles from "./ContainerLayout.module.css";

const OwnerDetails = ({ owner }) => {
  return (
    <div className={styles.generalItemContainer}>
      <div className={styles.detailsItem}>
        <p>
          Osakkaan numero:<span className={styles.nextRow}> {owner.id}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Etunimi Sukunimi/Yrityksen nimi:
          <span className={styles.nextRow}>
            {" "}
            {owner.firstname} {owner.lastname}
          </span>
        </p>
      </div>

      <div className={styles.smallerBoxContainerFlex}>
        <div className={styles.generalSmallerBox}>
          <p>Osakkeiden määrä: {owner.numberOfShares}</p>
        </div>
        <div className={styles.generalSmallerBox}>
          <p>Omistusprosentti: {owner.ownershipPercentage}</p>
        </div>
      </div>

      <div className={styles.shareNumberBoxContainerFlex}>
        {owner.shareNumbers.map((range, index) => (
          <div
            key={index}
            className={`${styles.generalSmallerBox} ${styles.fullWidth}`}
          >
            <p>
              Osakenumerot alkaen - loppuen:
              <span className={styles.nextRow}>
                {" "}
                {range.beginning} - {range.ending}
              </span>
            </p>
            <p>
              Saantopäivä:
              <span className={styles.nextRow}> {owner.collectionDate}</span>
            </p>
            <p>
              Maksupäivä:<span className={styles.nextRow}> {owner.term}</span>
            </p>
            <p>
              Varainsiirtovero:
              <span className={styles.nextRow}>
                {" "}
                {owner.transferTaxPaid ? "Maksettu" : "Ei maksettu"}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className={styles.detailsItem}>
        <p>
          Henkilötunnus/Y-tunnus:
          <span className={styles.nextRow}> {owner.personalIdentityCode}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Kotipaikka:<span className={styles.nextRow}> {owner.city}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Yhteystiedot:<span className={styles.nextRow}> {owner.address}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Sähköposti: <span className={styles.nextRow}> {owner.email}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Puhelinnumero: <span className={styles.nextRow}> {owner.phone}</span>
        </p>
      </div>

      <div className={styles.detailsItem}>
        <p>
          Tilinumero:
          <span className={styles.nextRow}> {owner.accountNumber}</span>
        </p>
      </div>

      <button className={styles.styledButton}>Muokkaa tietoja</button>
    </div>
  );
};

export default OwnerDetails;
