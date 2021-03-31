import React from 'react';
import { TableSettingsProps } from '../types/MainTypes';

export default function TableSettings(props: TableSettingsProps) {
  const {
    pageIndex,
    pageSize,
    pageOptions,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
  } = props;

  return (
    <div>
      <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
      {' '}
      <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      {' '}
      <span>
        Page
        {' '}
        <strong>
          {pageIndex + 1}
          {' '}
          of
          {' '}
          {pageOptions.length}
        </strong>
        {' '}
      </span>
      <span>
        Size of pagination
        {' '}
        {pageSize}
      </span>
    </div>
  );
}
