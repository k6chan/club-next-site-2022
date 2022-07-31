import {Container, Modal} from "react-bootstrap"
import PageHeader from "../components/pageheader"
import MyImage from "../components/myimage"
import {useState} from "react"
import GalleryData from "../data/gallery.json"


function Caption({item}) {
    if (item["credit"]) {
        if (item["credit"][0]["url"]) {
            return (
                <p className="caption-size text-center">{item["description"]} by <a
                    href={item["credit"][0]["url"]}>{item["credit"][0]["creator"]}</a></p>
            )
        } else {
            return (
                <p className="caption-size text-center">{item["description"]} by {item["credit"][0]["creator"]}</p>
            )
        }
    } else {
        return (
            <p className="caption-size text-center">{item["description"]}</p>
        )
    }
}

function ModalContent({item, onHandleClose}) {
    return (
        <Modal show onHide={onHandleClose} size="lg">
            <MyImage src={item["image"]} alt={item["description"]} className="w-100"/>
            <Modal.Footer><Caption item={item}/></Modal.Footer>
        </Modal>
    )
}

function ItemDisplay({item, setCurrentItem}) {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2 d-inline-flex flex-column">
            <MyImage src={item["image"]} alt={item["description"]} className="image-pointer p-1"
                     onClick={() => setCurrentItem(item)}/>
            <Caption item={item}/>
        </div>
    )
}

export default function Gallery() {
    const [currentItem, setCurrentItem] = useState(null)
    const handleItem = () => setCurrentItem(null)

    return (
        <div className="min-vh-100">
            <PageHeader src="images/header_images/gallery_banner.png" className="mb-4">Gallery</PageHeader>
            <Container className="mb-4">
                <p className="title-size title-font-condensed text-uppercase border-bottom">2021-2022</p>
                <div className="d-inline-flex flex-wrap align-items-start mw-100">
                    {GalleryData["gallery"]["2021-2022"].map((item, index) => (
                        <ItemDisplay item={item} key={index} onHandleClose={handleItem}
                                     setCurrentItem={setCurrentItem}/>
                    ))}
                </div>
                {(currentItem != null) && <ModalContent item={currentItem} onHandleClose={handleItem}/>}
            </Container>
        </div>
    )
}
