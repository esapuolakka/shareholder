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

const SelectPerson = ({ persons, onChange, name }) => (
  <select name={name} onChange={onChange} required>
    <option value="">Valitse henkilö</option>
    {persons.map((person) => {
      const { id, firstname, lastname } = person;
      return (
        <option key={id} value={id}>
          {id} {firstname} {lastname}
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
    numberOfShares: 0,
    pricePerShare: 0,
    transferTaxPaid: false,
    notes: "",
  });

  const [defaultPrice, setDefaultPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  // Get price from backend
  // NOT WORKING
  useEffect(() => {
    const fetchLatestPrice = async () => {
      try {
        const response = await api.get("/shareprice/latest");
        const latestPrice = response.data.price || 0;
        setDefaultPrice(latestPrice);
        setTransaction((prevState) => ({
          ...prevState,
          pricePerShare: latestPrice,
        }));
      } catch (error) {
        console.error("Error fetching latest price:", error);
      }
    };

    fetchLatestPrice();
  }, []);

  useEffect(() => {
    const total = transaction.pricePerShare * transaction.numberOfShares;
    setTotalPrice(total);
  }, [transaction.pricePerShare, transaction.numberOfShares]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransaction((prevState) => ({
      ...prevState,
      [name]:
        name === "numberOfShares"
          ? parseFloat(value) || 0
          : name === "pricePerShare"
          ? parseFloat(parseFloat(value).toFixed(2)) || 0.0
          : value,
    }));
  };

  const handleSelectPerson = (e) => {
    const { name, value } = e.target;
    const selectedPerson =
      persons.find((person) => person.id === parseInt(value)) || {};
    setTransaction((prevState) => ({
      ...prevState,
      [name]: selectedPerson,
    }));
  };

  const handleFocusShares = (e) => {
    if (transaction.numberOfShares === 0) {
      setTransaction((prevState) => ({
        ...prevState,
        numberOfShares: "",
      }));
    }
  };

  const handleBlurShares = (e) => {
    if (e.target.value === "") {
      setTransaction((prevState) => ({
        ...prevState,
        numberOfShares: 0,
      }));
    }
  };

  // insert back backend price
  const handleBlurPrice = () => {
    if (transaction.pricePerShare === 0) {
      setTransaction((prevState) => ({
        ...prevState,
        pricePerShare: defaultPrice,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transactionToSend = {
      ...transaction,
      seller: { id: transaction.seller.id },
      buyer: { id: transaction.buyer.id },
      transferTaxPaid: transaction.transferTaxPaid,
      pricePerShare: transaction.pricePerShare,
      numberOfShares: transaction.numberOfShares,
      collectionDate: transaction.collectionDate,
      term: transaction.term,
      notes: transaction.notes,
    };
    try {
      await api.post("/transactions/add", transactionToSend);
      setMessage("Osakemyynti ilmoitus lähetetty onnistuneesti");
      setSeverity("success");
      setOpen(true);
      setTransaction({
        seller: "",
        buyer: "",
        collectionDate: "",
        term: "",
        numberOfShares: 0,
        pricePerShare: 0,
        transferTaxPaid: false,
        notes: "",
      });
    } catch (error) {
      console.error("Backend-virhe:", error.response?.data || error.message);
      setMessage(
        "Virhe lisättäessä osakemyyntiä. Tarkista tiedot ja yritä uudelleen"
      );
      setSeverity("error");
      setOpen(true);
    }
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

      <div className={styles.addBox}>
        <h2>Osakemyynti ilmoitus</h2>
        <form className={styles.generalItemContainer} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label>Luovuttaja/ Myyjä:</label>
            <SelectPerson
              persons={persons}
              onChange={handleSelectPerson}
              name="seller"
            />
          </div>
          <div className={styles.formRow}>
            <label>Saaja/ Ostaja:</label>
            <SelectPerson
              persons={persons}
              onChange={handleSelectPerson}
              name="buyer"
            />
          </div>
          <div className={styles.inlineFormRow}>
            <div>
              <label>Saantopäivä:</label>
              <input
                name="collectionDate"
                type="date"
                value={transaction.collectionDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Maksupäivä:</label>
              <input
                name="term"
                type="date"
                value={transaction.term}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <label>Osakkeiden määrä:</label>
            <input
              name="numberOfShares"
              type="number"
              value={transaction.numberOfShares}
              onChange={handleChange}
              onFocus={handleFocusShares}
              onBlur={handleBlurShares}
              min="0"
              placeholder="Osakkeiden kokonaismäärä"
              required
            />
          </div>
          <div className={styles.formRow}>
            <label>Hinta per osake:</label>
            <input
              name="pricePerShare"
              type="number"
              step="0.01"
              value={transaction.pricePerShare}
              onChange={handleChange}
              onBlur={handleBlurPrice}
              min="0"
              required
            />
          </div>
          <div className={styles.formRow}>
            <label>Kokonaishinta (EUR):</label>
            <input type="number" value={totalPrice} step="0.01" readOnly />
          </div>
          <div className={styles.formRow}>
            <label>Varainsiirtovero:</label>
            <br />
            <div className={styles.radioGroup}>
              <label>Ei maksettu</label>
              <input
                type="radio"
                name="transferTaxPaid"
                value="false"
                checked={transaction.transferTaxPaid === false}
                onChange={() =>
                  setTransaction((prevState) => ({
                    ...prevState,
                    transferTaxPaid: false,
                  }))
                }
              />
            </div>
            <div className={styles.radioGroup}>
              <label>Maksettu</label>
              <input
                type="radio"
                name="transferTaxPaid"
                value="true"
                checked={transaction.transferTaxPaid === true}
                onChange={() =>
                  setTransaction((prevState) => ({
                    ...prevState,
                    transferTaxPaid: true,
                  }))
                }
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <label>Huomioitavaa:</label>
            <textarea
              name="notes"
              value={transaction.notes}
              onChange={handleChange}
              className={styles.formRow}
              rows="7"
            />
          </div>
          <div className={styles.formRow}>
            <button className={styles.styledButton} type="submit">
              Lähetä ilmoitus
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewTransactionForm;
