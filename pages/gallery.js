import {Container} from "react-bootstrap"
import PageHeader from "../components/pageheader";


export default function Gallery() {
    return (
        <div className="min-vh-100">
            <PageHeader src="images/header_images/gallery_banner.png" className="mb-4">Gallery</PageHeader>
            <Container>
                <p className="mb-4 title-font title-size text-center">Coming soon!</p>
            </Container>
        </div>
    )
}
