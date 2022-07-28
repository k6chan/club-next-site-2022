import BackgroundImage from "../components/index/backgroundimage"
import {Row, Col, Container} from "react-bootstrap"
import Link from "next/link"


export default function History() {
    return (
        <div className="min-vh-100">
            <Container fluid className="text-center p-0 mb-4" style={{"height": "25vh"}}>
                <BackgroundImage src="images/header_images/history_banner.jpg" className="landing">
                    <Row className="align-items-center h-100 g-0">
                        <Col>
                            <h1 className="text-uppercase title-font-condensed text-light display-size glow-text"><span
                                className="border-bottom border-light"><b>History</b></span></h1>
                        </Col>
                    </Row>
                </BackgroundImage>
            </Container>
            <Container>
                <p>Prior to 2022, Anime &amp; Manga Enthusiasts was known as Cal Animage Beta.</p>
                <p>&quot;Cal Animage&quot; is a loosely organized association of international anime clubs. The first
                    chapter, Cal
                    Animage Alpha, was founded at UC Berkeley in 1989. Our club, formerly known as Cal Animage Beta, was
                    established in
                    1990 as the second chapter. In 1992, Cal Animage chapters from multiple universities, including
                    UCSD, co-sponsored the first Anime Expo.</p>
                <p>Although anime distribution has increased in the United States, making it easier to purchase and
                    watch shows, Anime &amp; Manga Enthusiasts continues to host weekly anime showings as well as
                    bi-weekly off-campus or on-campus social events. Some of our events include karaoke, club dinner socials, and Tea
                    Party, which is an anime marathon and potluck. Our largest event of the year is Animefest, an on
                    campus convention that includes gaming, performances, Artist Alley, panels, and more!</p>
                <p className="mb-4">For more information on our showings or other upcoming events, check out
                    our <Link href='/' passHref>&quot;events&quot; section on our website</Link>, or join our <a
                        href="https://discord.gg/Qkz9ZKv">Discord</a> or <a
                        href="https://www.facebook.com/groups/ucsdanimeclub">Facebook group</a> for updates.</p>
            </Container>
        </div>
    )
}
