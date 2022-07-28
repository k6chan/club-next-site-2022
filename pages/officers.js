import BackgroundImage from "../components/index/backgroundimage"
import {Row, Col, Container} from "react-bootstrap"


export default function Officers() {
    return (
        <div className="min-vh-100">
            <Container fluid className="text-center p-0 mb-4" style={{"height": "25vh"}}>
                <BackgroundImage src="images/2016_animefest_banner.png" className="landing">
                    <Row className="align-items-center h-100 g-0">
                        <Col>
                            <h1 className="text-uppercase title-font-condensed text-light display-size glow-text"><span
                                className="border-bottom border-light"><b>Officers</b></span></h1>
                        </Col>
                    </Row>
                </BackgroundImage>
            </Container>
            <Container>
                <p>Placeholder</p>
            </Container>
        </div>
    )
}
