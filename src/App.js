import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Landing from "./pages/Landing/Landing";
import Listings from "./pages/Listings/Listings";
import ListingDetail from "./pages/ListingDetail/ListingDetail";
import ConnectPage from "./pages/Connect/Connect";
import NavigationMenu from "./components/Navigation/Navigation";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
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
              <Route path="/connect">
                <ConnectPage />
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
