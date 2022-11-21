import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled
} from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import { adduser } from "../service/api";


//styled
const Container = styled(FormGroup)`
width:500px;
margin:5% auto;
& > div {
    margin:10px;
}
`; 

//initial State
const initialValue = {
  name: "",
  userName:"",
  email:"",
  phoneNumber:""
}

const AddUser = () => {

    const navigate = useNavigate();

    //useState
    const [user,setUser] = useState(initialValue);

    //function
    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
    };
    const handleAddUser = async() =>{
        await adduser(user);
        navigate("/all");
        // setUser("");
    }
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={onValueChange} name="userName"/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={onValueChange} name="phoneNumber"/>
      </FormControl>
      <FormControl>
        <Button onClick={handleAddUser} variant="contained" color="secondary">Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
