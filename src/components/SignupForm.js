import { Button, Checkbox, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const SignupForm = () => {
  return (
    <VStack spacing={4}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>

      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>

      <Checkbox>I accept the Terms of Service and the Privacy Policy</Checkbox>

      <Button colorScheme="blue">Sign Up</Button>
    </VStack>
  );
};

export default SignupForm;
