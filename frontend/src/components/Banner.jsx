import Card from "react-bootstrap/Card";
import "../css/banner.css"

function Banner({imgURL, header}) {
    const cardTitle = {
        color: "black",
        fontSize: "5em",        
    }
    return (
            <Card className="bg-dark text-black">
                <div className="bg-image" style={{position: "relative"}}>
                <Card.Img className="banner-image" src={imgURL} />
                <div className="card-mask"></div>
                </div>
                <Card.ImgOverlay>
                    <div className=" text-left p-5"></div>
                    <Card.Title className="text-left p-5" style={cardTitle}>{header}</Card.Title>
                    
                </Card.ImgOverlay>
            </Card>
    )
}

export default Banner