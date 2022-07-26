import BannerCarousel from "../components/bannercarousel"
import Banners from "../data/banners.json"
import {Row, Col, Container, Ratio, Button} from "react-bootstrap";


export default function Home() {
    return (
        <>
            <BannerCarousel data={Banners["banners"]} className="mb-5"/>
            <Container className="border-bottom mb-5">
                <Row className="align-items-center mb-5">
                    <Col md={5}>
                        <p className="title-size title-font text-uppercase border-bottom">Future Events!</p>
                        <p>We hold GBMs every Monday evening and other events throughout the quarter. Although we are
                            currently preparing for Animefest, we still have plenty of other events happening this
                            quarter. Check our Discord or Facebook group for details!</p>
                        <div className="d-grid">
                            <Button variant="secondary" size="lg" href="https://www.facebook.com/groups/ucsdanimeclub">View
                                our upcoming events</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <Ratio aspectRatio="4x3">
                            <iframe
                                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dWNzZGFuaW1lY2x1YkBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB"
                                width="800" height="600">
                            </iframe>
                        </Ratio>
                    </Col>
                </Row>
            </Container>
            <Container className="border-bottom mb-5">
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <iframe src="https://discord.com/widget?id=247566229383020546&theme=dark" width="350"
                                height="500" allowTransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </Col>
                    <Col md={5}>
                        <p className="title-size title-font text-uppercase border-bottom">Who are we?</p>
                        <p>We&apos;re the anime club at UCSD :D We might seem mysterious at first, but stop by club sometime to
                            really get to know us. Don&apos;t be intimidated if you can&apos;t show up to the first couple of
                            meetings or events. Feel free to hang out with us at any of the things that we host
                            throughout the school year anytime.</p>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">History</Button>
                            <Button variant="secondary" size="lg">Current Officers</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
