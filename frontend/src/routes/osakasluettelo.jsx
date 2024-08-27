import Table from "../components/Table";

const Osakasluettelo = () => {
  const columns = [
    { id: "nimi", label: "Nimi", minWidth: 110 },
    { id: "maara", label: "Määrä", minWidth: 50, align: "center" },
    {
      id: "omistus",
      label: "Omistus%",
      minWidth: 70,
    },
    {
      id: "hetu",
      label: "Hetu",
      minWidth: 100,
    },
    {
      id: "kotikunta",
      label: "Kotikunta",
      minWidth: 70,
    },
    {
      id: "osoite",
      label: "Osoite",
      minWidth: 100,
    },
    {
      id: "sahkoposti",
      label: "Sähkoposti",
      minWidth: 70,
    },
    {
      id: "puhelinnumero",
      label: "Puhelinnumero",
      minWidth: 70,
    },
  ];

  const rows = [
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
    {
      nimi: "Narges Ghanbari",
      maara: 25,
      omistus: "A oy",
      hetu: "Y-2225069-2",
      kotikunta: "Helsinki",
      osoite: "Haltilanniitty 1",
      sahkoposti: "ngh@gmail.com",
      puhelinnumero: "+123456789",
    },
  ];
  return (
    <>
      <h1>Osakasluettelo</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Osakasluettelo;
