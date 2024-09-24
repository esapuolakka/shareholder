import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
import Toolbar from "@mui/material/Toolbar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
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
];

export async function loader() {
  //same axios get method
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
    };
  });

  return rowData;
}

const Osakasluettelo = () => {
  const rows = useLoaderData();
  return (
    <>
      <Toolbar style={{ padding: 0, display: "flex" }}>
        <h1>Osakasluettelo</h1>
        <p style={{ flex: 1 }}></p>
        <a href={`${import.meta.env.VITE_BASE_URL}/report/persons`}>
          <CloudDownloadIcon
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
