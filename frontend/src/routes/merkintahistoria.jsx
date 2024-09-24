import { useLoaderData } from "react-router-dom";
import TableWithPagination from "../components/TableWithPagination";
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
];

export async function loader() {
  const { data: shareholdersData } = await api.get("/shareholders");

  const rowData = shareholdersData.map((shareholder) => {
    return {
      id: `${shareholder.id}`,
      collectionDate: `${shareholder.collectionDate}`,
      term: `${shareholder.term}`,
      sellerName: `${shareholder.seller.firstname} ${shareholder.seller.lastname}`,
      buyerName: `${shareholder.buyer.firstname} ${shareholder.buyer.lastname}`,
      transferTax: shareholder.transferTaxPaid ? "Maksettu" : "Ei maksettu",
      numbers: `${shareholder.numberOfShares}`,
      pricePerShare: `${shareholder.pricePerShare}`,
      eur: `${shareholder.totalAmount}`,
      noteworthy: `${shareholder.notes}`,
    };
  });

  return rowData;
}
const Merkintahistoria = () => {
  const rows = useLoaderData();

  return (
    <>
      <h1>Merkintähistoria</h1>
      <TableWithPagination columns={columns} rows={rows} />
    </>
  );
};

export default Merkintahistoria;
