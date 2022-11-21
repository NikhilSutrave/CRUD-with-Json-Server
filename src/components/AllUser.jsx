import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getUser, deleteUser } from "../service/api";

//styled
const StyledTable = styled(Table)`
  width: 90%;
  margin: 5% auto;
`;
const Thead = styled(TableRow)`
  background: #7d5fff;
  & > th {
    font-size: 20px;
    color: #3d3d3d;
    font-weight: bold;
    ${"" /* border-radius:10px; */}
  }
`;
const Tbody = styled(TableRow)`
  background: #4b7bec;
  & > td {
    ${"" /* font-size: 20px; */}
    color: #3d3d3d;
    font-weight: bold;
  }
`;

const Lbutton = styled(Link)`
  text-decoration: none;
`;
const AllUser = () => {
  //useState
  const [users, setUsers] = useState([]);

  const getUserDetails = async () => {
    let response = await getUser();
    console.log(response);
    setUsers(response.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  //function
  const handleDelete = async (userid) => {
    await deleteUser(userid);
    getUserDetails();
  };
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((item) => {
          const { id, name, userName, email, phoneNumber } = item;
          return (
            <Tbody key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{userName}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phoneNumber}</TableCell>
              <TableCell>
                <Lbutton to={`/edit/${id}`}>
                  <Button
                    variant="contained"
                    style={{ marginRight: "10px", background: "#26de81" }}
                  >
                    Edit
                  </Button>
                </Lbutton>
                <Button
                  onClick={() => handleDelete(item.id)}
                  variant="contained"
                  style={{ background: "#eb3b5a" }}
                >
                  Delete
                </Button>
              </TableCell>
            </Tbody>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
