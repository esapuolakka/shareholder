import React from "react";
import styles from "./ContainerLayout.module.css";

const OwnerDetails = ({ owner }) => {
  return (
    <div className={styles.container}>
      <div className={styles["details-item"]}>
        <p>
          Osakkaan numero:<span className={styles.block}>{owner.id}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Etunimi Sukunimi/Yrityksen nimi:
          <span className={styles.block}>
            {owner.firstname} {owner.lastname}
          </span>
        </p>
      </div>

      <div className={styles["small-box-container"]}>
        <div className={styles["small-box"]}>
          <p>Osakkeiden määrä: {owner.numberOfShares}</p>
        </div>
        <div className={styles["small-box"]}>
          <p>Omistusprosentti: {owner.ownershipPercentage}</p>
        </div>
      </div>

      <div className={styles["share-number-box-container"]}>
        {owner.shareNumbers.map((range, index) => (
          <div key={index} className={styles["small-box"]}>
            <p>
              Osakenumerot alkaen - loppuen:
              <span className={styles.block}>
                {range.beginning} - {range.ending}
              </span>
            </p>
            <p>
              Saantopäivä:
              <span className={styles.block}>{owner.collectionDate}</span>
            </p>
            <p>
              Maksupäivä:<span className={styles.block}>{owner.term}</span>
            </p>
            <p>
              Varainsiirtovero:
              <span className={styles.block}>
                {owner.transferTaxPaid ? "Maksettu" : "Ei maksettu"}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className={styles["details-item"]}>
        <p>
          Henkilötunnus/Y-tunnus:
          <span className={styles.block}>{owner.personalIdentityCode}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Kotipaikka:<span className={styles.block}>{owner.city}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Yhteystiedot:<span className={styles.block}>{owner.address}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Sähköposti:<span className={styles.block}>{owner.email}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Puhelinnumero:<span className={styles.block}>{owner.phone}</span>
        </p>
      </div>

      <div className={styles["details-item"]}>
        <p>
          Tilinumero:<span className={styles.block}>{owner.accountNumber}</span>
        </p>
      </div>

      <p>UPDATE BUTTON</p>
    </div>
  );
};

export default OwnerDetails;
