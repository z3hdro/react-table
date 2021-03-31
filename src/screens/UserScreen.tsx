import React from 'react';
import { ParamTypes } from '../types/AppTypes';

export default function UserScreen(props: ParamTypes) {
  const { id } = props;

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
