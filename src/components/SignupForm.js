import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../ducks/auth.duck";
import { useHistory } from 'react-router-dom';

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with: ", userInfo);
    try { 
      dispatch(signup(userInfo));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <Box width="30%" minWidth="350px" marginX="auto" as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="email">
          <FormLabel fontSize="sm">Email address</FormLabel>
          <Input type="email" value={userInfo.email} name="email" onChange={handleChange} />
        </FormControl>

        <FormControl id="firstName">
          <FormLabel fontSize="sm">First Name</FormLabel>
          <Input type="text" value={userInfo.firstName} name="firstName" onChange={handleChange} />
        </FormControl>

        <FormControl id="lastName">
          <FormLabel fontSize="sm">Last Name</FormLabel>
          <Input type="text" value={userInfo.lastName} name="lastName" onChange={handleChange} />
        </FormControl>

        <FormControl id="password">
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input type="password" value={userInfo.password} name="password" onChange={handleChange} />
        </FormControl>

        <Box pt={2} width="full"> {/* Added padding top */}
          <Button colorScheme="blue" size="sm" width="full" type="submit">Sign Up</Button>
          <Checkbox size="sm" mt={2}>
            I accept the Terms of Service and the Privacy Policy
          </Checkbox>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignupForm;
