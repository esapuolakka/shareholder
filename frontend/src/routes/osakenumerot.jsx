import Table from "../components/Table";

const Osakenumerot = () => {
  const columns = [
    {
      id: "omistajanNimi",
      label: "Omistajan Nimi",
      minWidth: 100,
      align: "center",
    },
    {
      id: "osakenumerotAlkaen",
      label: "Osakenumerot Alkaen",
      minWidth: 50,
      align: "center",
    },
    {
      id: "osakenumerotLoppuen",
      label: "Osakenumerot Loppuen",
      minWidth: 50,
      align: "center",
    },
    {
      id: "kappaleMaara",
      label: "Kappalemäärä",
      minWidth: 70,
      align: "center",
    },
    {
      id: "tarkistuslaskenta",
      label: "Tarkistuslaskenta",
      minWidth: 70,
      align: "center",
    },
  ];

  const rows = [
    {
      osakenumerotAlkaen: 1,
      osakenumerotLoppuen: 100,
      kappaleMaara: "",
      omistajanNimi: "Saima",
      tarkistuslaskenta: "",
    },
  ];
  return (
    <>
      <h1>Osakenumerot</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakenumerot;
