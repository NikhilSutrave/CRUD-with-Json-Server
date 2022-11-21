import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getSingleuser, editUser } from "../service/api";

//styled
const Container = styled(FormGroup)`
  width: 500px;
  margin: 5% auto;
  & > div {
    margin: 10px;
  }
`;
const initialValue = {
  name: "",
  userName: "",
  email: "",
  phoneNumber: "",
};
const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  //useState
  const [user, setUser] = useState(initialValue);

  //useEffect to get single user data
  useEffect(() => {
    const getusersingle = async () => {
      let response = await getSingleuser(id);
      // console.log(response);
      setUser(response.data);
    };

    getusersingle();
  }, []);

  //function
  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleEditUser = async () => {
    await editUser(user, id);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={onValueChange} name="userName" value={user.userName} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input
          onChange={onValueChange}
          name="phoneNumber"
          value={user.phoneNumber}
        />
      </FormControl>
      <FormControl>
        <Button onClick={handleEditUser} variant="contained" color="secondary">
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
