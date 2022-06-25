import BannerCarousel from "../components/bannercarousel"
import Banners from "../data/banners.json"


export default function Home() {
    return (
        <>
            <BannerCarousel data={Banners["banners"]}/>
        </>
    )
}
