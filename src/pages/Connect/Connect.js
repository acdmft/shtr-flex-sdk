import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

const ConnectPage = () => {
    return (
      <Box p={4}>
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
  
          <TabPanels>
            <TabPanel>
              <LoginForm />
            </TabPanel>
            <TabPanel>
              <SignupForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  };
  
  export default ConnectPage;
  