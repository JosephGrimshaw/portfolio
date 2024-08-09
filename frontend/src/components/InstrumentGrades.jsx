import { Container, Row, Col, Card } from "react-bootstrap";

function InstrumentGrades() {
    return (
        <div style={{backgroundColor: "darkcyan"}}>
        <Container>
            <h1>Musical Qualifications</h1>
            <Row>
                <Col>
                    <Card>
                        <h1>Piano grade 5</h1> 
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <h1>Drum Kit grade 5</h1>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <h1>Singing experience</h1>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <h1>Music Theory grade 5</h1>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <h1>Guitar Experience</h1>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default InstrumentGrades