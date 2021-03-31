import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const App = ()=> {
  return (
    <div className="App">
      <Navbar expand="lg">
      <img src="1.png"></img> 
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#link">Языки программирования</Nav.Link>
          <NavDropdown title="О нас" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Контакты</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Деятельность</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Достижения</NavDropdown.Item>

          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          <Button variant="outline-dack">Искать</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>
    
  );
}

export default App;
