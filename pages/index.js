import { Container } from 'react-bootstrap'
// import MyImage from "../components/myimage"


export default function Home() {
    return (
        <>
            <Container fluid className="p-5 mt-4 section" id="parking">
                <h1 className="text-left mb-4 display-text">PARKING</h1>
                <p>Unfortunately, <a href="https://transportation.ucsd.edu/visit/visitor/index.html">parking is not
                    free</a> on UCSD&apos;s campus. We recommend you find free parking off campus and walking to campus
                    or taking the bus to campus. We apologize for the inconvenience.</p>
                <p>For parking on campus, please take a look at the <a
                    href="https://maps.ucsd.edu/map/?id=1005#!ce/17201?ct/36591,27576,20079,18312,18027,35364,29152,36849,42782,43513,45236?mc/32.877341347399,-117.23531663418?z/18?lvl/0">official
                    campus map</a>, expand <b>Parking by Permit Type</b>, and select <b>Visitor</b> in the menu to see
                    areas where you can park. Please ensure that you park in designated Visitor spots which will be
                    marked on the floor in these areas.</p>

                <p className="mb-4">
                    The Gilman Parking Structure is the closest parking structure to the convention. You can use the
                    Wayfinding feature or the map below to navigate to Price Center:</p>
            </Container>
        </>
    )
}
