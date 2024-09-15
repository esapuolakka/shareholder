import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import axios from "axios";

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
];

export async function loader() {
  //same axios get method
  const personsResponse = await axios.get("http://localhost:8080/api/persons");

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
    };
  });

  return rowData;
}

const Osakasluettelo = () => {
  const rows = useLoaderData();
  return (
    <>
      <h1>Osakasluettelo</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakasluettelo;
