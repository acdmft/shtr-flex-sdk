import { Button, Checkbox, FormControl, FormLabel, Input, Link, VStack } from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <VStack spacing={4}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>

      <Button colorScheme="blue">Login</Button>

      <Link href="/forgot-password" color="teal.500">Forgot password?</Link>
    </VStack>
  );
};

export default LoginForm;
