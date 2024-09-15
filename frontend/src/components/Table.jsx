import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import styles from "./Table.module.css";

export default function StickyHeadTable({ columns, rows }) {
  const [visibleColumns, setVisibleColumns] = React.useState(
    columns.map((column) => column.id)
  );
  // sorting 3 stages: no sort, desc, asc
  const [sortDirection, setSortDirection] = React.useState(null);
  const [sortedColumn, setSortedColumn] = React.useState(null);
  const [sortedRows, setSortedRows] = React.useState(rows);

  const handleSort = (columnId) => {
    let newSortDirection = null;

    if (sortedColumn === columnId) {
      if (sortDirection === null) {
        newSortDirection = "desc";
      } else if (sortDirection === "desc") {
        newSortDirection = "asc";
      } else if (sortDirection === "asc") {
        newSortDirection = null;
      }
    } else {
      newSortDirection = "desc";
    }

    setSortDirection(newSortDirection);
    setSortedColumn(columnId);

    if (newSortDirection === null) {
      setSortedRows(rows);
      return;
    }

    const newSortedRows = [...rows].sort((a, b) => {
      if (columnId === "ownershipPercentage") {
        return newSortDirection === "asc"
          ? a.ownershipPercentage - b.ownershipPercentage
          : b.ownershipPercentage - a.ownershipPercentage;
      }
      return 0;
    });

    setSortedRows(newSortedRows);
  };

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
                    {column.id === "ownershipPercentage" ? (
                      <TableSortLabel
                        active={
                          sortedColumn === column.id && sortDirection !== null
                        }
                        direction={sortDirection || "asc"}
                        onClick={() => handleSort(column.id)}
                        sx={{
                          "& .MuiTableSortLabel-icon": {
                            opacity:
                              sortedColumn === column.id &&
                              sortDirection !== null
                                ? 1
                                : 0.5,
                            color:
                              sortedColumn === column.id &&
                              sortDirection !== null
                                ? "inherit"
                                : "gray",
                          },
                        }}
                      >
                        {column.label}
                      </TableSortLabel>
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, rowIndex) => {
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
