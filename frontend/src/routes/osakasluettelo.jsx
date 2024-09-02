import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import axios from "axios";

const columns = [
  { id: "name", label: "Nimi", minWidth: 110 },
  { id: "numberOfShares", label: "Määrä", minWidth: 50, align: "center" },
  {
    id: "ownershipPercentage",
    label: "Omistus%",
    minWidth: 70,
  },
  {
    id: "ssn",
    label: "Hetu",
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
    label: "Sähkoposti",
    minWidth: 70,
  },
  {
    id: "phone",
    label: "Puhelinnumero",
    minWidth: 70,
  },
];

export async function loader() {
  //I'll use same axios get method
  const personsResponse = await axios.get("http://localhost:8080/api/persons");
  const shareholdersResponse = await axios.get(
    "http://localhost:8080/api/shareholders"
  );

  const personsData = personsResponse.data;

  const shareholdersData = shareholdersResponse.data;

  // Combine data
  const combinedData = personsData.map((person) => {
    const shareholder = shareholdersData.find(
      (s) => s.buyer.id === person.id || s.seller.id === person.id
    );
    return {
      name: `${person.firstname} ${person.lastname}`,
      ssn: person.ssn || "N/A",
      city: person.city || "N/A",
      address: `${person.address} ${person.postalCode}` || "N/A",
      email: person.email || "N/A",
      phone: person.phone || "N/A",
      numberOfShares:
        shareholder && shareholder.numberOfShares !== null
          ? shareholder.numberOfShares
          : 0,
      ownershipPercentage:
        shareholder && shareholder.ownershipPercentage !== null
          ? shareholder.ownershipPercentage
          : 0.0,
    };
  });

  console.log(combinedData);
  return combinedData;
}

const Osakasluettelo = () => {
  const rows = useLoaderData();
  console.log("Rows in component:", rows);
  return (
    <>
      <h1>Osakasluettelo</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakasluettelo;

// export async function loader() {
//   const rows = [
//     {
//       nimi: "Narges Ghanbari",
//       maara: 25,
//       omistus: "A oy",
//       hetu: "Y-2225069-2",
//       kotikunta: "Helsinki",
//       osoite: "Haltilanniitty 1",
//       sahkoposti: "ngh@gmail.com",
//       puhelinnumero: "+123456789",
//     },
//   ];
//   return rows;
// }
