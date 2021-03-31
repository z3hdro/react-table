import React, { useState, useEffect, useMemo } from 'react';
import { ColumnType } from '../types/HomeTypes';
import Table from '../components/Table';
import fetchData from '../API/API';
import styles from '../styles/home.module.css';

export default function HomeScreen() {
  const [data, setData] = useState<any>([]);

  const columns: ColumnType[] = useMemo(
    () => [
      {
        Header: '',
        accessor: 'checkbox',
      },
      {
        Header: 'id',
        accessor: 'id',
      },
      {
        Header: '',
        accessor: 'more',
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
        Header: '',
        accessor: 'delete',
      },
    ],
    [],
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
