
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavbarComponent() {
    return (
        <Navbar className="container mx-auto">
            <NavbarBrand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NextJs Auth</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/login">Login</NavbarLink>
                <NavbarLink href="/register">Register</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
