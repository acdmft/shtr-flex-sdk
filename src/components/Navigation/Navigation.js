import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

export default function NavigationMenu() {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='listings'>Listings</BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to='/about'>About</BreadcrumbLink>
            <BreadcrumbSeparator />
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
