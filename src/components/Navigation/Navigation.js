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
          <BreadcrumbLink as={Link} to="/connect">
            Connect
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
