import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./Table.module.css";

export default function StickyHeadTable({ columns, rows }) {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((column) => column.id)
  );

  const handleColumnToggle = (columnId) => {
    setVisibleColumns((prevVisibleColumns) =>
      prevVisibleColumns.includes(columnId)
        ? prevVisibleColumns.filter((id) => id !== columnId)
        : [...prevVisibleColumns, columnId]
    );
  };

  return (
    <>
      <div>
        {columns.map((column) => (
          <label key={column.id} className={styles.CheckboxContainer}>
            <input
              type="checkbox"
              checked={visibleColumns.includes(column.id)}
              onChange={() => handleColumnToggle(column.id)}
            />
            {column.label}
          </label>
        ))}
      </div>

      <TableContainer sx={{ maxHeight: 560 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={styles.TableHead}>
            <TableRow className={styles.TableRow}>
              {columns
                .filter((column) => visibleColumns.includes(column.id))
                .map((column, columnIndex) => (
                  <TableCell
                    className={styles.TableCell}
                    key={`header-cell-${column.id ?? columnIndex}`}
                    align={columnIndex === 0 ? "center" : "left"}
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
                  className={styles.TableRow}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={`row-${rowId}`}
                >
                  {columns
                    .filter((column) => visibleColumns.includes(column.id))
                    .map((column, columnIndex) => {
                      const value = row[column.id];
                      const cellId = `${rowId}-${column.id ?? columnIndex}`;
                      return (
                        <TableCell
                          className={styles.TableCell}
                          key={`cell-${cellId}`}
                          align={columnIndex === 0 ? "center" : "left"}
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
    </>
  );
}
