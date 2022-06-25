import Link from 'next/link'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


export default function Layout({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="title-font">
          <Link href="/" passHref><Navbar.Brand>ANIME &amp; MANGA ENTHUSIASTS</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav navbarScroll className="ms-auto">
              <Link href='/' passHref><Nav.Link>EVENTS</Nav.Link></Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                <Link href='/' passHref><NavDropdown.Item>HISTORY</NavDropdown.Item></Link>
                <Link href='/' passHref><NavDropdown.Item>OFFICERS</NavDropdown.Item></Link>
              </NavDropdown>
              <Link href='/' passHref><Nav.Link>JOIN US</Nav.Link></Link>
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
