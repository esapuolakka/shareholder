import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

const columns = [
  { id: "personId", label: "Nro", minWidth: 50 },
  { id: "name", label: "Nimi", minWidth: 110 },
  {
    id: "sharenumbersBeginning",
    label: "Osakenumerot alkaen",
    minWidth: 50,
  },
  {
    id: "sharenumbersEnding",
    label: "Osakenumerot loppuen",
    minWidth: 50,
  },
  { id: "numberOfRowsShares", label: "Osakemäärä", minWidth: 50 },
];

export async function loader() {
  const { data: shareOwnershipData } = await api.get("/shareownership/all"); //data now from OSAKE_OMISTUS table

  const rowData = shareOwnershipData.map((ownership) => {
    const sharenumbersBeginning = ownership.startingShareNumber;
    const sharenumbersEnding = ownership.endingShareNumber;

    return {
      personId:
        ownership.owner.id ?? "Tietoa ei pystytty hakemaan tietokannasta",
      name:
        `${ownership.owner.firstname} ${ownership.owner.lastname}` ??
        "Tietoa ei pystytty hakemaan tietokannasta",
      sharenumbersBeginning,
      sharenumbersEnding,
      numberOfRowsShares:
        ownership.numberOfShares ?? "Tietoa ei pystytty hakemaan tietokannasta",
    };
  });

  return rowData;
}

const Osakenumerot = () => {
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
          Ladataan osakenumeroiden tietoja, odota hetki...
        </p>
      </div>
    );
  }

  if (!rows || rows.length === 0) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Osakenumeroiden tietoja ei löytynyt. Lisää uusia tietoja tietokantaan.
        </p>
      </div>
    );
  }
  return (
    <>
      <h1>Osakenumerot</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakenumerot;
