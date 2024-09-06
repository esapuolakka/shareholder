import { useLoaderData } from "react-router-dom";
import TableWithPagination from "../components/TableWithPagination";
import axios from "axios";

const columns = [
  {
    id: "id",
    label: "Nro",
    minWidth: 100,
    align: "center",
  },
  {
    id: "collectionDate",
    label: "Saantopäivä",
    minWidth: 100,
    align: "center",
  },
  {
    id: "term",
    label: "Maksupäivä",
    minWidth: 100,
    align: "center",
  },
  { id: "sellerName", label: "Luovuttaja/myyjä", minWidth: 110 },
  { id: "buyerName", label: "Saaja/ostaja", minWidth: 110 },

  {
    id: "transferTax",
    label: "Varainsiirtovero",
    minWidth: 70,
    align: "center",
  },
  {
    id: "numbers",
    label: "Kpl",
    minWidth: 70,
    align: "center",
  },
  {
    id: "pricePerShare",
    label: "Hinta per osake",
    minWidth: 70,
    align: "center",
  },
  {
    id: "eur",
    label: "EUR",
    minWidth: 100,
    align: "center",
  },
  {
    id: "noteworthy",
    label: "Huomioitavaa",
    minWidth: 200,
    align: "center",
  },
];

export async function loader() {
  //same axios get method
  const shareholdersResponse = await axios.get(
    "http://localhost:8080/api/shareholders"
  );

  const shareholdersData = shareholdersResponse.data;

  const rowData = shareholdersData.map((shareholder) => {
    return {
      id: `${shareholder.id}`,
      collectionDate: `${shareholder.collectionDate}`,
      term: `${shareholder.term}`,
      sellerName: `${shareholder.seller.firstname} ${shareholder.seller.lastname}`,
      buyerName: `${shareholder.buyer.firstname} ${shareholder.buyer.lastname}`,
      transferTax: `${shareholder.transferTaxPaid}`,
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
