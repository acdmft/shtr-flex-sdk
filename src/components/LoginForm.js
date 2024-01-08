import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../ducks/auth.duck";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // console.log("handleSubmit");
    e.preventDefault();
    dispatch(login(credentials));
  };
  const handleChange = (e) => {
    // console.log('handleChane ', e.target.value)
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <Box width="30%" minWidth="350px" marginX="auto" as="form" onSubmit={handleSubmit}>
      <VStack spacing={3}>
        <FormControl id="email" isRequired>
          <FormLabel fontSize="sm">Email address</FormLabel>
          <Input
            type="email"
            size="sm"
            value={credentials.email}
            name="email"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input
            type="password"
            size="sm"
            value={credentials.password}
            name="password"
            onChange={handleChange}
          />
        </FormControl>

        <Box pt={2} width="full">
          
          {/* Added padding top */}
          <Button colorScheme="blue" size="sm" width="full" type="submit">
            Login
          </Button>
          <Box height={2} />
          <Link href="/forgot-password" color="teal.500" fontSize="sm">
            Forgot password?
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginForm;
