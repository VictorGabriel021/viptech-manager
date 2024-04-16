import { ReactNode, useState } from "react";

import { Alert } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Colors } from "shared/constants/color";

import TablePaginationActions from "./components/TablePaginationActions";
import TitleAndActions from "./components/TitleAndActions";

import Loading from "../Loading";

import { AlertContainer, PaperContainer, ActionsContainer } from "./styles";
import { DeleteIconCustom, EditIconCustom } from "shared/styles/Icons/styles";

interface IColumns {
  id: string;
  label: string;
}

interface IRows<T> {
  [key: string]: T;
}

interface IPagedTableProps<T> {
  columns: IColumns[];
  rows: IRows<T>[];
  onEditHandler: (id: number) => void;
  onDeleteHandler: (rows: T) => void;
  title: string;
  notFoundText: string;
  filter: ReactNode;
  onCreateHandler: () => void;
  isLoading: boolean;
}

const PagedTable = <T,>({
  columns,
  rows,
  onEditHandler,
  onDeleteHandler,
  title,
  notFoundText,
  filter,
  onCreateHandler,
  isLoading,
}: IPagedTableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const TableCellCustom = ({ children }: { children?: ReactNode }) => {
    return (
      <TableCell
        align="center"
        style={{
          minWidth: 200,
          background: Colors.primary,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {children}
      </TableCell>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <TitleAndActions title={title} onCreateHandler={onCreateHandler} />

      {filter}

      {!rows.length ? (
        <AlertContainer>
          <Alert variant="filled" severity="info">
            {notFoundText}
          </Alert>
        </AlertContainer>
      ) : (
        <PaperContainer sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ width: "90vw" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCellCustom key={index}>
                      {column.label}
                    </TableCellCustom>
                  ))}
                  <TableCellCustom />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id] as any;
                          return (
                            <TableCell key={column.label} align="center">
                              {value}
                            </TableCell>
                          );
                        })}
                        <TableCell align="center">
                          <ActionsContainer>
                            <EditIconCustom
                              onClick={() => onEditHandler(row.id as number)}
                            />
                            <DeleteIconCustom
                              onClick={() => onDeleteHandler(row as T)}
                            />
                          </ActionsContainer>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            labelRowsPerPage="Linhas por página"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
            }
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </PaperContainer>
      )}
    </>
  );
};

export default PagedTable;
