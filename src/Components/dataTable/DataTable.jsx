import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];




export default function DataTable() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then((res) => {
      setUserData(res.data.results);
    })
    
  })
  console.log(userData);
  return (
    // <div style={{ height: 400, width: '100%', margin: '70px 5px', }}>
    //   <DataGrid
    //     className='datagrid'
    //     rows={rows}
    //     columns={columns}
    //     pageSize={5}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //   />
    // </div>
    
    <TableContainer component={Paper} className="table" style={{ height: '100%',width: '90%', margin: '70px 30px', }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Email</TableCell>
                    <TableCell className="tableCell">Phone</TableCell>
                    <TableCell className="tableCell">City</TableCell>
                    <TableCell className="tableCell">Country</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
          {userData ? (
            userData?.map((row) => (
              <TableRow key={row.email}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.picture.medium} alt="" className="image" />
                    {row.name?.first}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.phone}</TableCell>
                <TableCell className="tableCell">{row.location?.city}</TableCell>
                <TableCell className="tableCell">{row.location?.country}</TableCell>
              </TableRow>
            ))
          ) : (
              <>
              Loading ...............................
              </>
          )}
                </TableBody>
            </Table>
        </TableContainer>
  );
}
