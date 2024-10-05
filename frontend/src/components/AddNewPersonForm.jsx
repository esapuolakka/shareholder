import React, { useState } from "react";
import api from "../api";
import styles from "./Addnew.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Tabs, Tab, Box } from "@mui/material";

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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  // Uusi tila henkilö/yritys-vaihtoehdolle
  const [tabValue, setTabValue] = useState(0); // 0: henkilö, 1: yritys

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Jos valitsee yrityksen, kopioi etunimi sukunimeksi
    if (newValue === 1) {
      setPerson((prevState) => ({
        ...prevState,
        lastname: prevState.firstname, // Kopioi etunimi sukunimeksi
      }));
    }
  };

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
      setMessage("Uusi henkilö lisätty onnistuneesti tietokantaan");
      setSeverity("success");
      setOpen(true);
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
      setMessage(
        "Virhe lisättäessä osakkeenomistajaa. Tarkista tiedot ja yritä uudelleen"
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
        <h2>Osakkeenomistaja</h2>
        {/* <form className={styles.generalItemContainer} onSubmit={handleSubmit}>
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
          </div> */}
        {/* Välilehdet henkilö/yritys valintaan */}

        <form className={styles.generalItemContainer} onSubmit={handleSubmit}>
          <Box>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontFamily: "var(--font-family)",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  color: "var(--heading-and-text-color)",
                  "&.Mui-selected": {
                    color: "var(--heading-and-text-color)",
                  },
                  "&:focus": {
                    color: "var(--heading-and-text-color)",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--primary-color)",
                  height: "1px",
                },
              }}
            >
              <Tab label="Henkilö" />
              <Tab label="Yritys" />
            </Tabs>
          </Box>
          <div className={styles.formRow}>
            <label>
              {tabValue === 0 ? "Osakkaan nimi:" : "Yrityksen nimi:"}
            </label>
            <input
              name="firstname"
              value={person.firstname}
              onChange={handleChange}
              placeholder={tabValue === 0 ? "Etunimi" : "Yrityksen nimi"}
              required
            />
            {/* Näytetään sukunimi vain jos henkilö on valittuna */}
            {tabValue === 0 && (
              <input
                name="lastname"
                value={person.lastname}
                onChange={handleChange}
                placeholder="Sukunimi"
                required
              />
            )}
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
    </>
  );
};

export default AddNewPersonForm;
