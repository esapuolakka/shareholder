import React, { useState } from "react";
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

const OwnerDetails = ({ owners }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [editedOwner, setEditedOwner] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for navigation
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handlePersonChange = (personId) => {
    const owner = owners.find((o) => o.id === parseInt(personId, 10)); //Radix 10
    if (owner) {
      setSelectedOwner(owner);
      setEditedOwner(owner);
      navigate(`/osakkaidentiedot/${owner.id}`);
    } else {
      setSelectedOwner(null);
      setEditedOwner(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOwner((prevOwner) => ({
      ...prevOwner,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (JSON.stringify(editedOwner) === JSON.stringify(selectedOwner)) {
      setMessage("Ei muutoksia tallennettavaksi");
      setSeverity("warning");
      setOpen(true);
      setIsEditing(false);
      return;
    }

    try {
      await api.put(`/persons/${editedOwner.id}`, editedOwner);
      setSelectedOwner(editedOwner);
      setMessage("Henkilötietojen päivitys onnistui");
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
    setEditedOwner(selectedOwner);
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

      {selectedOwner && (
        <form className={styles.generalItemContainer}>
          <div className={styles.detailsItem}>
            <label>Osakkaan numero:</label>
            <span className={styles.nextRow}>{selectedOwner.id}</span>
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
            <>
              <div className={styles.detailsItem}>
                <label>Etunimi Sukunimi/ Yrityksen nimi:</label>
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
            {selectedOwner.shareNumbers &&
            selectedOwner.shareNumbers.beginning &&
            selectedOwner.shareNumbers.ending ? (
              <div
                className={`${styles.generalSmallerBox} ${styles.fullWidth}`}
              >
                <div>
                  <label>Osakenumerot alkaen - loppuen: </label>
                  <span className={styles.nextRow}>
                    {selectedOwner.shareNumbers.beginning} -{" "}
                    {selectedOwner.shareNumbers.ending}
                  </span>
                </div>
                {isEditing ? (
                  <>
                    <div>
                      <label>Saantopäivä: </label>
                      <input
                        type="date"
                        name="collectionDate"
                        value={editedOwner.collectionDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label>Maksupäivä: </label>
                      <input
                        type="date"
                        name="term"
                        value={editedOwner.term}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label>Varainsiirtovero: </label>
                      <select
                        name="transferTaxPaid"
                        value={editedOwner.transferTaxPaid}
                        onChange={handleInputChange}
                      >
                        <option value={true}>Maksettu</option>
                        <option value={false}>Ei maksettu</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label>Saantopäivä: </label>
                      <span className={styles.nextRow}>
                        {selectedOwner.collectionDate}
                      </span>
                    </div>
                    <div>
                      <label>Maksupäivä: </label>
                      <span className={styles.nextRow}>
                        {selectedOwner.term}
                      </span>
                    </div>
                    <div>
                      <label>Varainsiirtovero: </label>
                      <span className={styles.nextRow}>
                        {selectedOwner.transferTaxPaid
                          ? "Maksettu"
                          : "Ei maksettu"}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div
                className={`${styles.generalSmallerBox} ${styles.fullWidth}`}
              >
                <p>Osakkeita ei omistuksessa tällä hetkellä</p>
              </div>
            )}
          </div>

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
              <span className={styles.nextRow}>{selectedOwner.ssn}</span>
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
                <span className={styles.nextRow}>{selectedOwner.address}</span>
                <span className={styles.nextRow}>
                  {selectedOwner.postalCode}
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
              <span className={styles.nextRow}>{selectedOwner.city}</span>
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
                name="bankAccount"
                value={editedOwner.bankAccount}
                onChange={handleInputChange}
              />
            ) : (
              <span className={styles.nextRow}>
                {selectedOwner.bankAccount}
              </span>
            )}
          </div>

          {isEditing ? (
            <>
              <div>
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
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  className={styles.styledButton}
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  Muokkaa tietoja
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </>
  );
};

export default OwnerDetails;
