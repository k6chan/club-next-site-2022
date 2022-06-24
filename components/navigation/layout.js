import Link from 'next/link'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


export default function Layout({ children }) {
  return (
    <>
      {/* Sticky top is not good for legacy, consider fixing the position instead (but that comes with covering up the page) */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Link href="/" passHref><Navbar.Brand className="display-text">ANIME &amp; MANGA ENTHUSIASTS</Navbar.Brand></Link>
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
          <p className="caption-text">&copy; 2022 Anime &amp; Manga Enthusiasts at UC San Diego. Website design by Kaitlyn Chan. All assets belong to their respective owners.</p>
        </Container>
      </footer>
    </>
  )
}
