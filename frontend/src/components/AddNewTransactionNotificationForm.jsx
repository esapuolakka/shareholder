import React, { useState, useEffect } from "react";
import api from "../api";
import styles from "./Addnew.module.css";
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

const AddNewTransactionForm = ({ persons }) => {
  const [transaction, setTransaction] = useState({
    seller: "",
    buyer: "",
    collectionDate: "",
    term: "",
    shareCount: "",
    pricePerShare: "",
    notes: "",
  });
  // const [sharesStart, setSharesStart] = useState("");
  // const [sharesEnd, setSharesEnd] = useState("");
  const [pricePerShare, setPricePerShare] = useState("");
  const [shareCount, setShareCount] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  // share count
  // useEffect(() => {
  //   if (sharesStart && sharesEnd) {
  //     const count = Math.max(0, sharesEnd - sharesStart + 1);
  //     setShareCount(count);
  //   } else {
  //     setShareCount(0);
  //   }
  // }, [sharesStart, sharesEnd]);
  // total
  useEffect(() => {
    if (pricePerShare && shareCount) {
      const total = pricePerShare * shareCount;
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [pricePerShare, shareCount]);

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
            <button className={styles.styledButton}>
              Lähetä uusi osakemyynti ilmoitus
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewTransactionForm;
