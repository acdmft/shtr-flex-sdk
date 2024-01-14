import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function NavigationMenu() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log('isAuthenticated ', isAuthenticated)
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/listings">
          Listings
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to="/about">
          About
        </BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      {isAuthenticated ? (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/">
            Profile
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/connect">
            Connect
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
