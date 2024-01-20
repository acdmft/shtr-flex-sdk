import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { logout } from '../../ducks/auth.duck';
import { useDispatch } from "react-redux";


export default function NavigationMenu() {
  function handleLogout() {
    // console.log("handleLogout ")
    dispatch(logout());
  }
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log('isAuthenticated ', isAuthenticated)
  return (
    <Breadcrumb spacing="8px" separator={<BreadcrumbSeparator color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" color="blue.500" fontWeight="medium">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/listings" color="blue.500" fontWeight="medium">
          Listings
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to="/about" color="blue.500" fontWeight="medium">
          About
        </BreadcrumbLink>
        {/* <BreadcrumbSeparator /> */}
      </BreadcrumbItem>
      {isAuthenticated ? (
        <BreadcrumbItem isCurrentPage>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/account-info">
                Account Info
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/connect" color="blue.500" fontWeight="medium">
            Connect
          </BreadcrumbLink>
          {/* <BreadcrumbSeparator /> */}
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
