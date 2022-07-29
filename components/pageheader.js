import {Col, Container, Row} from "react-bootstrap"
import BackgroundImage from "./backgroundimage";


export default function PageHeader({ children, src, ...otherProps }) {
  let {className, ...otherPropsWithoutClassName} = otherProps
  let classes = "text-center p-0 header-height"
  return (
      <Container fluid className={classes + " " + className} {...otherPropsWithoutClassName}>
        <BackgroundImage src={src} className="header-image">
          <Row className="align-items-center h-100 g-0 header-filter">
            <Col>
              <h1 className="text-uppercase title-font-condensed text-light display-size glow-text"><span
                  className="border-bottom border-light border-2"><b>{children}</b></span></h1>
            </Col>
          </Row>
        </BackgroundImage>
      </Container>
  )
}
