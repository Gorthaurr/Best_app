import { useState, useRef, React} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

import Profile from './Profile';

function Navigation() {
  const [inputValue, setInputValue] = useState('');
  const renderCount = useRef(0);
  const [address, setAddress] = useState('');
  const [show, setShow] = useState(false);
  const changeShow = () => setShow(!show);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.innerText);
  };
  console.log(renderCount.current += 1);
  
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DeliveryClub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Form.Control 
              style={{width: '400px', fontSize: '16px'}}
              size="sm"
              type="search"
              placeholder="Найти ресторан или блюдо"
              className="me-2" 
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange}
            />  
            <Button variant="outline-success">Найти</Button>
            <NavDropdown title={address || 'Укажите адрес'} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Добавить новый адрес</NavDropdown.Item>
              <NavDropdown.Item  href="#action4" onClick={handleAddress}>улица Цюрупы 12к1</NavDropdown.Item>
              <NavDropdown.Item href="#action5" onClick={handleAddress}>улица профсоюзная 55</NavDropdown.Item>
            </NavDropdown>  
          </Nav>
          <Form className="d-flex mr-2">
            <Nav.Link href="#zakaz">Заказы </Nav.Link>
          </Form>
          <Form className="d-flex mr-2" >
            <Nav.Link href="#profile" onClick={changeShow}>Профиль</Nav.Link>
        
          </Form>
          <Profile show={show} close={changeShow}></Profile>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigation;