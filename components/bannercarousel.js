import { Carousel} from "react-bootstrap"
import MyImage from "./myimage";


export function CaptionLink(data) {
  // takes a carousel item with optional "link" property
  if (data["data"]["link"]) {
    return (
        <p><a href={data["data"]["link"]["address"]}>{data["data"]["link"]["name"]}</a></p>
    )
  }
  else {
    return <></>
  }
}

export default function BannerCarousel({ data, ...otherProps }) {
  return (
    <Carousel {...otherProps}>
      {data.map((banner, index) => (
          <Carousel.Item key={index}>
            <MyImage src={banner["image"]} alt={banner["title"]}/>
            <Carousel.Caption className="title-font text-uppercase">
              <h2>{banner["title"]}</h2>
              <p>{banner["description"]}</p>
              <CaptionLink data={banner}/>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
