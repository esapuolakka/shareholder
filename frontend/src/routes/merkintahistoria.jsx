import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TableWithPagination from "../components/TableWithPagination";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "../components/OwnerDetails.module.css";
import api from "../api";

const columns = [
  {
    id: "id",
    label: "Nro",
    minWidth: 50,
  },
  {
    id: "collectionDate",
    label: "Saantopäivä",
    minWidth: 100,
  },
  {
    id: "term",
    label: "Maksupäivä",
    minWidth: 100,
  },
  { id: "sellerName", label: "Luovuttaja/myyjä", minWidth: 110 },
  { id: "buyerName", label: "Saaja/ostaja", minWidth: 110 },

  {
    id: "transferTax",
    label: "Varainsiirtovero",
    minWidth: 70,
  },
  {
    id: "numbers",
    label: "Osakemäärä",
    minWidth: 70,
  },
  {
    id: "pricePerShare",
    label: "EUR/osake",
    minWidth: 70,
  },
  {
    id: "eur",
    label: "EUR",
    minWidth: 70,
  },
  {
    id: "noteworthy",
    label: "Huomioitavaa",
    minWidth: 200,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 70,
  },
];

export async function loader() {
  const { data: transactionsData } = await api.get("/transactions");
  const rowData = transactionsData.map((transaction) => {
    return {
      id: `${transaction.id}`,
      collectionDate: `${transaction.collectionDate}`,
      term: `${transaction.term}`,
      sellerName: `${transaction.seller.firstname} ${transaction.seller.lastname}`,
      buyerName: `${transaction.buyer.firstname} ${transaction.buyer.lastname}`,
      transferTax: transaction.transferTaxPaid ? "Maksettu" : "Ei maksettu",
      numbers: `${transaction.numberOfShares}`,
      pricePerShare: `${transaction.pricePerShare}`,
      eur: `${transaction.totalAmount}`,
      noteworthy: `${transaction.notes}`,
      status: `${transaction.status}`,
    };
  });

  return rowData;
}

const Merkintahistoria = () => {
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
          Ladataan merkintähistoria tietoja, odota hetki...
        </p>
      </div>
    );
  }

  if (!rows || rows.length === 0) {
    return (
      <div>
        <PropagateLoader className={styles.loaderimg} />
        <p style={{ textAlign: "center" }}>
          Merkintähistoriasta ei löytynyt tietoja. Lisää uusia tietoja
          tietokantaan.
        </p>
      </div>
    );
  }

  return (
    <>
      <Toolbar style={{ padding: 0, display: "flex" }}>
        <h1>Merkintähistoria</h1>
        <p style={{ flex: 1 }}></p>
        <a href="http://localhost:8080/api/report/shareholders">
          <CloudDownloadIcon fontSize="large" />
        </a>
      </Toolbar>

      <TableWithPagination columns={columns} rows={rows} />
    </>
  );
};

export default Merkintahistoria;
