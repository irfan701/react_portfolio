import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mih from './../assets/images/nextjs.svg'

const ClientReview = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <Container className="text-center">
                <h1 className="commonMainTitle">CLIENT SAYS</h1>
                <Slider {...settings}>
                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={mih} alt=""/>
                                <h1 className="commonTitle">Web Development</h1>
                                <p className="commonDescription">First i analysis the requirement of project. According
                                    to the
                                    requirement i make a proper technical analysis, then i build a software</p>
                            </Col>

                        </Row>
                    </div>

                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={mih} alt=""/>
                                <h1 className="commonTitle">Web Development</h1>
                                <p className="commonDescription">First i analysis the requirement of project. According
                                    to the
                                    requirement i make a proper technical analysis, then i build a software</p>
                            </Col>

                        </Row>
                    </div>


                    <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={mih} alt=""/>
                                <h1 className="commonTitle">Web Development</h1>
                                <p className="commonDescription">First i analysis the requirement of project. According
                                    to the
                                    requirement i make a proper technical analysis, then i build a software</p>
                            </Col>

                        </Row>
                    </div>

                </Slider>


            </Container>
        </>
    );
};

export default ClientReview;