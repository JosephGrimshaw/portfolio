import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

function PageNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark" fixed="top">
        <Container fluid>
                <Col xs={0.5}></Col>
                <Col xs={2}>
                    <Navbar.Brand href="/">Joseph Grimshaw</Navbar.Brand>
                </Col>
                <Col xs={1}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                        <Col xs={3}>
                        <Nav.Link href="/music">Music</Nav.Link>
                        </Col>
                        <Col xs={3}>
                        <Nav.Link href="/drama">Drama</Nav.Link>
                        </Col>
                        <Col xs={4}>
                        <Nav.Link href="/academia">Academia</Nav.Link>
                        </Col>
                        <Col xs={3}>
                        <Nav.Link href="/dofe">DofE</Nav.Link>
                        </Col>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col xs={10}></Col>
        </Container>
    </Navbar>
    )
}

export default PageNavbar