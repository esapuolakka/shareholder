import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import Toolbar from "@mui/material/Toolbar";
import DownloadIcon from "@mui/icons-material/Download";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

const columns = [
  { id: "personId", label: "Nro", minWidth: 50 },
  { id: "name", label: "Nimi", minWidth: 110 },
  { id: "numberOfShares", label: "Osakemäärä", minWidth: 50 },
  {
    id: "ownershipPercentage",
    label: "Omistus%",
    minWidth: 70,
  },
  {
    id: "ssn",
    label: "Hetu/Y-tunnus",
    minWidth: 100,
  },
  {
    id: "city",
    label: "Kotikunta",
    minWidth: 70,
  },
  {
    id: "address",
    label: "Osoite",
    minWidth: 100,
  },
  {
    id: "email",
    label: "Sähköposti",
    minWidth: 70,
  },
  {
    id: "phone",
    label: "Puhelinnumero",
    minWidth: 70,
  },
  {
    id: "bankAccount",
    label: "Tilinumero",
    minWidth: 100,
  },
];

export async function loader() {
  const personsResponse = await api.get("/persons");

  const personsData = personsResponse.data;

  const rowData = personsData.map((person) => {
    return {
      personId: `${person.id}` || "N/A",
      name: `${person.firstname} ${person.lastname}` || "N/A",
      ssn: person.ssn || "N/A",
      city: person.city || "N/A",
      address: `${person.address} ${person.postalCode}` || "N/A",
      email: person.email || "N/A",
      phone: person.phone || "N/A",
      numberOfShares: person.numberOfShares || 0,
      ownershipPercentage: person.ownershipPercentage || 0.0,
      bankAccount: person.bankAccount || "N/A",
    };
  });

  return rowData;
}

const Osakasluettelo = () => {
  const rows = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rows) {
      setLoading(false);
    }
  }, [rows]);

  if (loading) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Ladataan osakkaiden tietoja, odota hetki...
        </p>
      </div>
    );
  }

  if (!rows || rows.length === 0) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Osakkaiden tietoja ei löytynyt. Lisää uusia tietoja tietokantaan.
        </p>
      </div>
    );
  }

  return (
    <>
      <Toolbar style={{ padding: 0, display: "flex" }}>
        <h1>Osakasluettelo</h1>
        <p style={{ flex: 1 }}></p>
        <a href={`${import.meta.env.VITE_BASE_URL}/report/persons`}>
          <DownloadIcon
            fontSize="large"
            sx={{
              color: "var(--heading-and-text-color)",
              "&:hover": {
                color: "var(--link-text-color-hover)",
              },
            }}
          />
        </a>
      </Toolbar>

      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakasluettelo;
