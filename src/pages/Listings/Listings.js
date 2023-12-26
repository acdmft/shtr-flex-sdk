import React, { useState, useEffect } from "react";
import { Button, BreadcrumbLink, Stack } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const sharetribeSdk = require('sharetribe-flex-sdk');

export default function Listings() {
  const [data, setData] = useState([]);
  useEffect(()=> {
    const sdk = sharetribeSdk.createInstance({
      clientId: process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID,
    });
    sdk.listings
      .query({ perPage: 5 })
      .then((res) => {
        setData(res.data.data)
        // Print listing titles
        // listings = res.data.data;
        console.log('listings', data);
        res.data.data.forEach((listing) => {
          console.log(`Listing: ${listing.attributes.title}`);
        });
      })
      .catch((res) => {
        // An error occurred
        console.log(
          `Request failed with status: ${res.status} ${res.statusText}`
        );
      });
  }, [])
  // let listings = [];//["1","3","33"];
  return (
    <Stack direction="row" spacing={4} align="center">
      {data.map((item, index) => (
        <p>item: 
        
      <Button colorScheme="teal" variant="solid">
        <ChakraLink as={Link} to="/listings/111">
          {item.attributes.title} 
          
        {index}
        </ChakraLink>
      </Button>
        </p>
      ))
    }
      <Button colorScheme="teal" variant="outline">
        <ChakraLink as={Link} to="/listings/222">
          222
        </ChakraLink>
      </Button>
      <Button colorScheme="teal" variant="ghost">
        <ChakraLink as={Link} to="/listings/333">
          333
        </ChakraLink>
      </Button>
    </Stack>
  );
}
