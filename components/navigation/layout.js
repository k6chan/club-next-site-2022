import Link from 'next/link'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import MyImage from "../myimage"


export default function Layout({ children }) {
  return (
    <>
      <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
        <Container className="title-font text-uppercase">
            <Navbar.Brand href="/">
                <MyImage alt="AME logo" src="../images/AME_navbar_logo.svg" className="d-inline-block w-50"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav navbarScroll className="ms-auto">
                    <Link href='/' passHref><Nav.Link>Events</Nav.Link></Link>
                    <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                        <Link href='/' passHref><NavDropdown.Item>History</NavDropdown.Item></Link>
                        <Link href='/' passHref><NavDropdown.Item>Officers</NavDropdown.Item></Link>
                    </NavDropdown>
                    <Link href='/' passHref><Nav.Link>Join Us</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{children}</main>
      <footer className="footer">
        <Container className="text-center">
          <p className="caption-text">&copy; 2022 Anime &amp; Manga Enthusiasts at UC San Diego. All assets belong to their respective owners.</p>
        </Container>
      </footer>
    </>
  )
}
