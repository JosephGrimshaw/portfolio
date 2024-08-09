import PageNavbar from "../components/Navbar";
import Banner from "../components/Banner";
import musicHero from "../assets/musicHero.svg";
import PageCarousel from "../components/PageCarousel";
import {Container, Row, Col } from 'react-bootstrap';
import InstrumentGrades from "../components/InstrumentGrades";

function Music() {
    return (
        <div style={{backgroundColor: "azure"}}>
            <Container fluid="xs">
            <header style={{ paddingLeft: 0 }}>
                <PageNavbar />
                <Row className="justify-content-md-center" >
                    <Col>
                        <Banner imgURL={musicHero} header="MUSIC" />
                    </Col>
                </Row>
                <Row><div className=" text-center p-5"></div></Row>
            </header>
            <Row>
                <Col xs={12}>
                    <InstrumentGrades />
                </Col>
            </Row>
            <Row><div className=" p-5"></div></Row>
            <Row>
                <Col xs={12}>
                <PageCarousel />
                </Col>
                <Col></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Music