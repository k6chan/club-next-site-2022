import { Carousel} from "react-bootstrap"
import MyImage from "./myimage";


export default function BannerCarousel({ data, ...otherProps }) {
  return (
    <Carousel {...otherProps}>
      {data.map((banner, index) => (
          <Carousel.Item key={index}>
            <MyImage src={banner["image"]} alt={banner["title"]}/>
            <Carousel.Caption className="title-font text-uppercase">
              <h2>{banner["title"]}</h2>
              <p>{banner["description"]}</p>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
