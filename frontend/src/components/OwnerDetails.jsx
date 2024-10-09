import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OwnerDetails.module.css";
import api from "../api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={0}
      ref={ref}
      variant="standard"
      sx={{
        marginRight: "1.5rem",
        marginTop: "var(--navbar-height)",
        backgroundColor: "white",
        border: " 0.5px solid var(--border-color)",
        color: "var(--heading-and-text-color)",
        fontFamily: "var(--font-family)",
        fontSize: "12px",
      }}
      {...props}
    />
  );
});

const SelectPerson = ({ owners, onChange }) =>
  owners && owners.length > 0 ? (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Valitse henkilö</option>
      {owners.map((owner) => {
        const { id, firstname, lastname } = owner;
        return (
          <option key={id} value={id}>
            {id} {firstname} {lastname}
          </option>
        );
      })}
    </select>
  ) : (
    <p>Ei henkilöitä valittavissa</p>
  );

const OwnerDetails = ({ owner, owners, shareOwnerships, transactions }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOwner, setEditedOwner] = useState(owner);
  const [editedTransactions, setEditedTransactions] = useState(transactions);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    setEditedOwner(owner);
    setEditedTransactions(transactions);
  }, [owner, transactions]);

  const handlePersonChange = (personId) => {
    if (personId === "") {
      navigate("/osakkaidentiedot");
      setEditedOwner(null);
    } else {
      const selectedOwner = owners.find((o) => o.id === parseInt(personId, 10));
      if (selectedOwner) {
        setEditedOwner(selectedOwner);
        navigate(`/osakkaidentiedot/${selectedOwner.id}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOwner((prevOwner) => ({
      ...prevOwner,
      [name]: value,
    }));
  };

  const handleTransactionChange = (id, field, value) => {
    const updatedTransactions = editedTransactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, [field]: value };
      }
      return transaction;
    });
    setEditedTransactions(updatedTransactions);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    console.log("Saving owner:", editedOwner);
    console.log("Saving transactions:", editedTransactions);

    try {
      await api.put(`/persons/${editedOwner.id}`, editedOwner);
      // dif transactions
      for (const transaction of editedTransactions) {
        const updatedTransaction = {
          ...transaction,
          collectionDate: transaction.collectionDate
            ? new Date(transaction.collectionDate).toISOString()
            : null,
          term: transaction.term
            ? new Date(transaction.term).toISOString()
            : null,
          transferTaxPaid:
            transaction.transferTaxPaid === true ||
            transaction.transferTaxPaid === "true",
        };

        await api.put(`/transactions/${transaction.id}`, updatedTransaction);
      }

      setMessage("Kaikki tiedot päivitettiin onnistuneesti");
      setSeverity("success");
      setOpen(true);
      setIsEditing(false);
    } catch (error) {
      console.error("Tietojen päivittäminen epäonnistui", error);
      setMessage("Tietojen päivittäminen epäonnistui");
      setSeverity("error");
      setOpen(true);
    }
  };

  const handleCancel = () => {
    setEditedOwner(owner);
    setEditedTransactions(transactions);
    setIsEditing(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>

      <SelectPerson owners={owners} onChange={handlePersonChange} />

      {editedOwner && (
        <form className={styles.generalItemContainer}>
          <div className={styles.left}>
            {/* Henkilötiedot */}
            <div className={styles.detailsItem}>
              <label>Osakkaan numero:</label>
              <span className={styles.nextRow}>{editedOwner.id}</span>
            </div>

            {isEditing ? (
              <>
                <div className={styles.detailsItem}>
                  <label>Nimi/ Yrityksen nimi:</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Etunimi/ Yrityksen nimi"
                    value={editedOwner.firstname}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Sukunimi"
                    value={editedOwner.lastname}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            ) : (
              <div className={styles.detailsItem}>
                <label>Etunimi Sukunimi/ Yrityksen nimi:</label>
                <span className={styles.nextRow}>
                  {editedOwner.firstname} {editedOwner.lastname}
                </span>
              </div>
            )}

            <div className={styles.detailsItem}>
              <label>Henkilötunnus/ Y-tunnus:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="ssn"
                  value={editedOwner.ssn}
                  onChange={handleInputChange}
                />
              ) : (
                <span className={styles.nextRow}>{editedOwner.ssn}</span>
              )}
            </div>

            <div className={styles.detailsItem}>
              <label>Yhteystiedot:</label>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="address"
                    placeholder="Osoite"
                    value={editedOwner.address}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postinumero"
                    value={editedOwner.postalCode}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <>
                  <span className={styles.nextRow}>{editedOwner.address}</span>
                  <span className={styles.nextRow}>
                    {editedOwner.postalCode}
                  </span>
                </>
              )}
            </div>

            <div className={styles.detailsItem}>
              <label>Kotipaikka:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  placeholder="Kaupunki"
                  value={editedOwner.city}
                  onChange={handleInputChange}
                />
              ) : (
                <span className={styles.nextRow}>{editedOwner.city}</span>
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
                <span className={styles.nextRow}>{editedOwner.email}</span>
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
                <span className={styles.nextRow}>{editedOwner.phone}</span>
              )}
            </div>
            <div className={styles.detailsItem}>
              <label>Tilinumero:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="bankAccount"
                  value={editedOwner.bankAccount}
                  onChange={handleInputChange}
                />
              ) : (
                <span className={styles.nextRow}>
                  {editedOwner.bankAccount}
                </span>
              )}
            </div>

            <div className={styles.detailsItem}>
              {isEditing ? (
                <>
                  <button
                    className={styles.styledButton}
                    type="button"
                    onClick={handleSave}
                  >
                    Tallenna
                  </button>
                  <button
                    className={styles.styledButton}
                    type="button"
                    onClick={handleCancel}
                  >
                    Peruuta
                  </button>
                </>
              ) : (
                <button
                  className={styles.styledButton}
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  Muokkaa tietoja
                </button>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.smallerBoxContainerFlex}>
              <div className={styles.generalSmallerBox}>
                <label>Osakkeiden määrä: </label>
                <span style={{ fontWeight: "500" }}>
                  {editedOwner.numberOfShares} kpl
                </span>
              </div>
              <div className={styles.generalSmallerBox}>
                <label>Omistusprosentti: </label>
                <span style={{ fontWeight: "500" }}>
                  {editedOwner.ownershipPercentage}%
                </span>
              </div>
            </div>

            {/* Osakeomistukset */}
            <label>OSAKEOMISTUKSET: </label>
            <div className={styles.shareNumberBoxContainerFlex}>
              {shareOwnerships.length > 0 ? (
                shareOwnerships.map((share, index) => (
                  <div key={index} className={styles.generalSmallerBox}>
                    <div>
                      <label>Osakenumerot alkaen - loppuen: </label> <br />
                      <span>
                        {share.startingShareNumber} - {share.endingShareNumber}
                      </span>
                    </div>
                    <div>
                      <label>Osakkeiden määrä: </label> <br />
                      <span>{share.numberOfShares}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>Ei osakeomistuksia</p>
              )}
            </div>

            {/* Transaktiot */}
            <label>OSAKEMYYNTI TAPAHTUMAT: </label>
            <div className={styles.transactionBoxContainerFlex}>
              {editedTransactions.length > 0 ? (
                editedTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className={`${
                      isEditing
                        ? styles.generalSmallerBoxEditingMode
                        : styles.generalSmallerBox
                    } ${styles.fullWidth}`}
                  >
                    <div>
                      <label>Osakemyynnin ID: </label>
                      <span style={{ fontWeight: "500" }}>
                        {transaction.id}
                      </span>
                    </div>
                    <div>
                      <label>Rooli: </label>
                      <span>
                        {transaction.buyer.id === editedOwner.id
                          ? "Ostaja"
                          : "Myyjä"}
                      </span>
                    </div>
                    <div>
                      <label>Osakkeiden määrä: </label>
                      <span>{transaction.numberOfShares}</span>
                    </div>
                    <div>
                      <label>Kaupan hinta yhteensä: </label> <br />
                      <span>{transaction.totalAmount} €</span>
                    </div>

                    {isEditing ? (
                      <>
                        <div>
                          <label>Saantopäivä: </label>
                          <input
                            type="date"
                            name="collectionDate"
                            value={
                              transaction.collectionDate &&
                              !isNaN(new Date(transaction.collectionDate))
                                ? new Date(transaction.collectionDate)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(e) =>
                              handleTransactionChange(
                                transaction.id,
                                "collectionDate",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label>Maksupäivä: </label>
                          <input
                            type="date"
                            name="term"
                            value={
                              transaction.term &&
                              !isNaN(new Date(transaction.term))
                                ? new Date(transaction.term)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(e) =>
                              handleTransactionChange(
                                transaction.id,
                                "term",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label>Varainsiirtovero: </label>
                          <select
                            name="transferTaxPaid"
                            value={
                              transaction.transferTaxPaid ? "true" : "false"
                            }
                            onChange={(e) =>
                              handleTransactionChange(
                                transaction.id,
                                "transferTaxPaid",
                                e.target.value === "true"
                              )
                            }
                          >
                            <option value="true">Maksettu</option>
                            <option value="false">Ei maksettu</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label>Saantopäivä: </label>
                          <span>
                            {transaction.collectionDate &&
                            !isNaN(new Date(transaction.collectionDate))
                              ? new Date(transaction.collectionDate)
                                  .toISOString()
                                  .split("T")[0]
                              : "Tietoa ei löytynyt"}
                          </span>
                        </div>
                        <div>
                          <label>Maksupäivä: </label>
                          <span>
                            {transaction.term &&
                            !isNaN(new Date(transaction.term))
                              ? new Date(transaction.term)
                                  .toISOString()
                                  .split("T")[0]
                              : "Tietoa ei löytynyt"}
                          </span>
                        </div>
                        <div>
                          <label>Varainsiirtovero: </label>
                          <span>
                            {transaction.transferTaxPaid
                              ? "Maksettu"
                              : "Ei maksettu"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p>Ei transaktioita</p>
              )}
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default OwnerDetails;
