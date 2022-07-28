import BackgroundImage from "../components/index/backgroundimage"
import {Row, Col, Container} from "react-bootstrap"


export default function Gallery() {
    return (
        <div className="vh-100">
            <Container fluid className="text-center p-0 mb-4" style={{"height": "25vh"}}>
                <BackgroundImage src="images/mascots_banner.png" className="landing">
                    <Row className="align-items-center h-100 g-0">
                        <Col>
                            <h1 className="text-uppercase title-font-condensed text-light display-size glow-text"><span
                                className="border-bottom border-light"><b>Gallery</b></span></h1>
                        </Col>
                    </Row>
                </BackgroundImage>
            </Container>
            <Container>
                <p className="mb-4 title-font title-size text-center">Coming soon!</p>
            </Container>
        </div>
    )
}
