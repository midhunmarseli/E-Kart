import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  // to access data inside store: useSelector hook
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const cartlist = useSelector((state) => state.cartReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{ zIndex: "1" }} >
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home">
              <img
                height={'30px'}
                className='me-3'
                src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="" />
              E KART
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link className='btn border rounded me-2'>
                <Link to={'/wishlist'} style={{ color: "white", textDecoration: "none" }}>
                  Wishlist <Badge bg="secondary">{wishlistArray.length}</Badge> </Link>
              </Nav.Link>
              <Nav.Link className='btn border rounded' style={{ width: "100px" }}>
                <Link to={'/cart'} style={{ color: "white", textDecoration: "none" }}>
                  cart <Badge bg="secondary">{cartlist.length}</Badge></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header