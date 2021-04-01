export interface ColumnType {
    Header: string | (() => null),
    accessor: string,
}

export interface GeoType {
    lat: string,
    lng: string,
}

export interface AddressType {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoType
}

export interface UserType {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType
}

export interface TableTypeProps {
    columns: any,
    data: UserType[],
}

export interface TableSettingsProps {
    pageIndex: number,
    pageSize: number,
    pageOptions: number[],
    canPreviousPage: boolean,
    canNextPage: boolean,
    previousPage: () => void;
    nextPage: () => void;
}
