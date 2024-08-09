import { Carousel, Container, Row, Col } from "react-bootstrap";
import musicHero from '../assets/musicHero.svg';
import { useState, useEffect } from "react";

function PageCarousel() {
    const [index, setIndex] = useState(0);
    const [slideText, setSlideText] = useState({title: "Truro School Rock Concert 20/20/24", text: "Truro School Rock Concert 20/20/24"})

    function handleIndexChange(slideIndex) {
        setIndex(slideIndex);
    }

    function handleSlideTextChange(newSlideText) {
        setSlideText(newSlideText);
    }
    useEffect(() => {
        switch (index) {
            case 0:
                console.log(0)
                handleSlideTextChange({title: "Truro School Rock Concert 20/20/24", text: "This concert was held on the lawn. I played Radiohead Creep and my own composition, Second Chance"})
                console.log(slideText.title)
                break;
            case 1:
                handleSlideTextChange({title: "Truro School Jazz Concert 21/11/23", text: "This concert was held in the sports hall. I played in wind band, as well as my own composition, Christmas."})
                console.log(slideText.title)
                break;
        }
    }, [index])
    return (
        <Container fluid>
            <div style={{backgroundColor: "darkcyan"}}>
            <Row>
                <Col xs={8}>
        <Carousel activeIndex={index} onSelect={handleIndexChange}>
            <Carousel.Item>
                <img src={musicHero}  />
                <Carousel.Caption>
                    <h3>3/5/24 Truro School Rock Concert</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={musicHero}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={musicHero}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={musicHero} />
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
            <div>
                <h1>
                    {slideText.title}
                </h1>
                <p>{slideText.text}</p>
            </div>
        </Col>
        </Row>
        </div>
        </Container>
    )
}

export default PageCarousel