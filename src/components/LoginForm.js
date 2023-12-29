import { Box, Button, FormControl, FormLabel, Input, Link, VStack } from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Box width="30%" minWidth="350px" marginX="auto">
      <VStack spacing={3}>
        <FormControl id="email" isRequired>
          <FormLabel fontSize="sm">Email address</FormLabel>
          <Input type="email" size="sm" />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input type="password" size="sm" />
        </FormControl>

        <Box pt={2} width="full"> {/* Added padding top */}
          <Button colorScheme="blue" size="sm" width="full">Login</Button>
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
