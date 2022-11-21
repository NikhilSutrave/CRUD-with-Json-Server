import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//styled
const Header = styled(AppBar)`
    background-image:linear-gradient(120deg,black,white);
`;
const Tabs = styled(Link)`
font-size:25px;
color:#FFC312;
text-decoration:none;
font-weight:bold;
margin:10px;
`;
const Navbar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs>CRUD-Json-Server</Tabs>
           <Tabs to="/all">All User</Tabs> 
           <Tabs to="/add">Add User</Tabs> 
        </Toolbar>
    </Header>
  )
}

export default Navbar