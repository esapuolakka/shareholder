import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./BasicTable.css";

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

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="TableHead">
            <TableRow className="TableRow">
              {columns.map((column) => (
                <TableCell
                  className="TableCell"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    className="TableRow"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className="TableCell"
                          key={column.id}
                          align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
