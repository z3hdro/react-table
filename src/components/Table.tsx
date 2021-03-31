import React from 'react';
import {
  useTable, useSortBy, usePagination,
} from 'react-table';
import TableSettings from './TableSettings';
import { TableTypeProps } from '../types/MainTypes';

export default function Table(props: TableTypeProps) {
  const { columns, data } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    pageOptions,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0, pageSize: 5 },
  },
  useSortBy,
  usePagination);

  console.log(useTable({
    columns,
    data,
  },
  useSortBy,
  usePagination));

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TableSettings
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageOptions={pageOptions}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
}
