import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ColumnType, UserType } from '../types/MainTypes';
import Table from '../components/Table';
import fetchData from '../API/API';
import styles from '../styles/home.module.css';

export default function HomeScreen() {
  const [data, setData] = useState<UserType[]>([]);

  console.log(data);

  const columns: ColumnType[] = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id',
      },
      {
        Header: () => null,
        accessor: 'more',
        Cell: ({ row }: any) => (
          <Link className={styles.Link} to={`/users/${row.values.id}`}>
            <p>Подробнее</p>
          </Link>
        ),
      },
      {
        Header: 'username',
        accessor: 'username',
      },
      {
        Header: 'email',
        accessor: 'email',
      },
      {
        Header: 'website',
        accessor: 'website',
      },
      {
        Header: () => null,
        accessor: 'delete',
        Cell: (tableProps) => (
          <div
            onClick={() => {
              console.log('row index', tableProps.row.index);
              const dataCopy = [...data];
              console.log('dataCopy before', dataCopy);

              dataCopy.splice(tableProps.row.index, 1);
              console.log('dataCopy after', dataCopy);
              setData(dataCopy);
            }}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
          >
            x
          </div>
        ),
      },
    ],
    [data],
  );

  useEffect(() => {
    fetchData(setData)
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.container}>
      <Table columns={columns} data={data} />
    </div>
  );
}
