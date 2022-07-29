import {Carousel} from "react-bootstrap"
import {useRouter} from "next/dist/client/router"


function CarouselBackground({image}) {
    const router = useRouter()
    const myBackgroundStyle = {
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        height: `500px`,
        backgroundImage: `linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 40%), url('${router.basePath}/${image}')`
    }
    return (
        <div className="w-100" style={myBackgroundStyle}></div>
    )
}

export default function BannerCarousel({banners, ...otherProps}) {
    return (
        <Carousel {...otherProps}>
            {banners.map((banner, index) => (
                <Carousel.Item key={index}>
                    <CarouselBackground image={banner["image"]}/>
                    <Carousel.Caption className="title-font text-uppercase glow-text">
                        <h2>{banner["title"]}</h2>
                        <p>{banner["description"]}</p>
                        {banner["link"] && <p><a href={banner["link"]["address"]}>{banner["link"]["name"]}</a></p>}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
