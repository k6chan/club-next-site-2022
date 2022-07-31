import {Col, Container, Row} from "react-bootstrap"
import PageHeader from "../components/pageheader"
import MyImage from "../components/myimage"
import OfficerData from "../data/officers.json"
import Link from "next/link"


function encodeOfficer(name) {
    return encodeURIComponent(name)
}

function ContactDisplay({contact}) {
    if (contact["url"]) {
        return (
            <p className="mb-0">{contact["title"]}: <a href={contact["url"]}>{contact["handle"]}</a></p>
        )
    } else {
        return (
            <p className="mb-0">{contact["title"]}: {contact["handle"]}</p>
        )
    }
}

function OfficerDisplay({officer}) {
    return (
        <Row className="align-items-top" id={encodeOfficer(officer["name"])}>
            <Col xs={12} sm={12} md={7} className="py-2">
                <p className="title-size title-font-condensed text-uppercase border-bottom">{officer["name"]}</p>
                {officer["description"].map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <br/>
                <p className="mb-0">Contact:</p>
                {officer["contact"].map((contact, index) => (
                    <ContactDisplay contact={contact} key={index}/>
                ))}
            </Col>
            <Col xs={12} sm={12} md={5} className="py-2">
                <MyImage src={officer["image"]} alt={officer["name"]}
                         className="w-100 rounded-circle"/>
            </Col>
        </Row>
    )
}

export default function Officers() {
    // sort officers by name
    const officersSorted = OfficerData["officers"].sort((o1, o2) => o1["name"].localeCompare(o2["name"]))

    return (
        <>
            <PageHeader src="images/header_images/officers_banner.png" className="mb-4">Officers</PageHeader>
            <Container className="mb-4">
                <div className="border-bottom border-light mb-4">
                    <div className="d-inline-flex flex-wrap justify-content-center align-items-start mb-4">
                        {officersSorted.map((officer, index) => (
                            <Link key={index} href={`#${encodeOfficer(officer["name"])}`} passHref>
                                <MyImage src={officer["image"]}
                                         className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 image-pointer"/>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="d-grid gap-5">
                    {officersSorted.map((officer, index) => (
                        <OfficerDisplay officer={officer} key={index}/>
                    ))}
                </div>
            </Container>
        </>
    )
}
