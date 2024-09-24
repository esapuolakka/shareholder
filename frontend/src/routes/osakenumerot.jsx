import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
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
  const { data: personsData } = await api.get("/persons");

  const rowData = personsData.map((person) => {
    const sharenumbersBeginning = 0;
    const sharenumbersEnding = 0;

    return {
      personId: `${person.id}` || "N/A",
      name: `${person.firstname} ${person.lastname}` || "N/A",
      sharenumbersBeginning,
      sharenumbersEnding,
      numberOfRowsShares: sharenumbersEnding - sharenumbersBeginning + 1,
    };
  });

  return rowData;
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
