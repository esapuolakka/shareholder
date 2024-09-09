import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";

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
  { id: "numberOfShares", label: "Osakemäärä", minWidth: 50 },
];

export async function loader() {
  const rows = [
    {
      personId: 1,
      name: "Saima",
      sharenumbersBeginning: 1,
      sharenumbersEnding: 100,
      numberOfShares: "",
    },
  ];
  return rows;
}

const Osakenumerot = () => {
  const rows = useLoaderData();
  return (
    <>
      <h1>Osakenumerot</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakenumerot;
