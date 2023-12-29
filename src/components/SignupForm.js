import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const SignupForm = () => {
  return (
    <Box width="30%" minWidth="350px" marginX="auto">
      <VStack spacing={4}>
        <FormControl id="email">
          <FormLabel fontSize="sm">Email address</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="firstName">
          <FormLabel fontSize="sm">First Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="lastName">
          <FormLabel fontSize="sm">Last Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="password">
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input type="password" />
        </FormControl>

        <Box pt={2} width="full"> {/* Added padding top */}
          <Button colorScheme="blue" size="sm" width="full">Sign Up</Button>
          <Checkbox size="sm" mt={2}>
            I accept the Terms of Service and the Privacy Policy
          </Checkbox>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignupForm;
