import BannerCarousel from "../components/bannercarousel"
import MyImage from "../components/myimage"
import Banners from "../data/banners.json"
import {Row, Col, Container, Ratio, Button} from "react-bootstrap"
import Link from "next/link";


export default function Home() {
    return (
        <>
            <BannerCarousel banners={Banners["banners"]} className="mb-4 text-center"/>
            <Container>
                <div className="border-bottom border-light mb-4">
                    <Row className="align-items-center mb-4">
                        <Col xs={12} sm={12} md={5} className="py-2">
                            <p className="title-size title-font-condensed text-uppercase border-bottom">Future
                                Events!</p>
                            <p className="mb-4">We hold GBMs every Monday evening and other events throughout the
                                quarter. Although we are
                                currently preparing for Animefest, we still have plenty of other events happening this
                                quarter. Check our Discord or Facebook group for details!</p>
                            <div className="d-grid">
                                <Button variant="primary" size="lg"
                                        href="https://www.facebook.com/groups/ucsdanimeclub">View
                                    our upcoming events</Button>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7} className="py-2">
                            <Ratio aspectRatio="4x3">
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dWNzZGFuaW1lY2x1YkBnbWFpbC5jb20&color=%23039BE5"
                                    width="800" height="600">
                                </iframe>
                            </Ratio>
                        </Col>
                    </Row>
                </div>
                <div className="border-bottom border-light mb-4">
                    <Row className="align-items-center mb-4">
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <Ratio aspectRatio={350 / 500}>
                                <iframe src="https://discord.com/widget?id=247566229383020546&theme=dark" width="350"
                                        height="500"
                                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                            </Ratio>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <p className="title-size title-font-condensed text-uppercase border-bottom">Who are we?</p>
                            <p className="mb-4">We&apos;re the anime club at UCSD :D We might seem mysterious at first,
                                but stop by club
                                sometime to
                                really get to know us. Don&apos;t be intimidated if you can&apos;t show up to the first
                                couple of
                                meetings or events. Feel free to hang out with us at any of the things that we host
                                throughout the school year anytime.</p>
                            <div className="d-grid gap-2">
                                <Link href="/history" passHref><Button variant="primary"
                                                                       size="lg">History</Button></Link>
                                <Link href="/officers" passHref><Button variant="primary" size="lg">Current
                                    Officers</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="align-items-center mb-4">
                        <Col xs={12} sm={12} md={7} className="py-2">
                            <p className="title-size title-font-condensed text-uppercase border-bottom">What Do We
                                Do?</p>
                            <p>We host anime showings and other activities every Monday evening. We also hang out and
                                organize weekend socials like karaoke, club dinner, etc. Our largest event is our
                                on-campus
                                con, Animefest, which takes place every Winter Quarter.</p>
                        </Col>
                        <Col xs={12} sm={12} md={5} className="py-2">
                            <MyImage src="images/triton_sitting.png" alt="Triton sitting"
                                     className="w-100"></MyImage>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
