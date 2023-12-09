import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react';


import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Listings from "./components/Listings/Listings";
import ListingDetail from "./components/ListingDetail/ListingDetail";
import NavigationMenu from "./components/Navigation/Navigation";



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Sharetribe!</h1>
        </header>
        <div style={{ height: "50em" }}>
          <BrowserRouter>
          <NavigationMenu />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/listings/:listingId">
                <ListingDetail />
              </Route>
              <Route path="/listings">
                <Listings />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
