import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./table.css";

export default function StickyHeadTable({ columns, rows }) {
  return (
    <>
      <TableContainer sx={{ maxHeight: 560 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="TableHead">
            <TableRow className="TableRow">
              {columns.map((column, columnIndex) => (
                <TableCell
                  className="TableCell"
                  key={`header-cell-${column.id ?? columnIndex}`}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => {
              const rowId = row.id ?? rowIndex;
              return (
                <TableRow
                  className="TableRow"
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={`row-${rowId}`}
                >
                  {columns.map((column, columnIndex) => {
                    const value = row[column.id];
                    const cellId = `${rowId}-${column.id ?? columnIndex}`;
                    return (
                      <TableCell
                        className="TableCell"
                        key={`cell-${cellId}`}
                        align={column.align}
                      >
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
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </>
  );
}
