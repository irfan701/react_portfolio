import {Col, Container, Row} from "react-bootstrap";
import redis from './../assets/images/banner.jpg'

const Courses = () => {
    return (
        <>
            <Container className="text-center">
                <h1 className="commonMainTitle">Courses</h1>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Row className="mb-2">
                            <Col lg={6} md={6} sm={12}>
                                <img className="img-thumbnail courseImg" src={redis} alt=""/>
                            </Col>
                            <Col>
                                <div className="text-justify">
                                    <h2 className="courseTitle">WEB DEVELOP</h2>
                                    <p className="courseDes">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.</p>
                                    <a className="courseDetailsBtn" href='/courseDetails'>Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Row className="mb-2">
                            <Col lg={6} md={6} sm={12}>
                                <img className="img-thumbnail courseImg" src={redis} alt=""/>
                            </Col>
                            <Col>
                                <div className="text-justify">
                                    <h2 className="courseTitle">WEB DEVELOP</h2>
                                    <p className="courseDes">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.</p>
                                    <a className="courseDetailsBtn" href='/courseDetails'>Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Row className="">
                            <Col lg={6} md={6} sm={12}>
                                <img className="img-thumbnail courseImg" src={redis} alt=""/>
                            </Col>
                            <Col>
                                <div className="text-justify">
                                    <h2 className="courseTitle">WEB DEVELOP</h2>
                                    <p className="courseDes">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.</p>
                                    <a className="courseDetailsBtn" href='/courseDetails'>Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Row className="">
                            <Col lg={6} md={6} sm={12}>
                                <img className="img-thumbnail courseImg" src={redis} alt=""/>
                            </Col>
                            <Col>
                                <div className="text-justify">
                                    <h2 className="courseTitle">WEB DEVELOP</h2>
                                    <p className="courseDes">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.</p>
                                    <a className="courseDetailsBtn" href='/courseDetails'>Details</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </Container>
        </>
    );
};

export default Courses;