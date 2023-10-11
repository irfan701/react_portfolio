import {FaCheckCircle} from "react-icons/fa";
import Countup from "./utils/Countup.jsx";
import {Card, Col, Container, Row} from "react-bootstrap";

const Summary = () => {
    return (
        <>
            <Container className='summaryFixedBanner mt-5' fluid={true}>
                <div className="summaryBannerOverlay">
                    <Container className="text-center">
                        <Row>
                            <Col sm={12} md={6} lg={8} className="countSection">
                                <Row>
                                    <Col>
                                        <div>
                                            <h1 className='countNumber'>{<Countup start={0} end={100}/>}</h1>
                                            <h4 className='countTitle'>Total Projects</h4>
                                            <hr className='w-25 bg-danger'/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <h1 className='countNumber'>{<Countup start={0} end={100}/>}</h1>
                                            <h4 className='countTitle'>Total Clients</h4>
                                            <hr className='w-25 bg-white'/>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>


                            <Col sm={12} md={6} lg={4}>
                                <Card className='workCard'>
                                    <Card.Body>
                                        <Card.Text>
                                            <h1 className='cardTitle text-justify'>How I Work </h1>
                                            <div className='cardSubTitle text-justify'>
                                                <p><FaCheckCircle className='iconBullet'/> Requirement Gathering</p>
                                                <p><FaCheckCircle className='iconBullet'/> System Analysis</p>
                                                <p><FaCheckCircle className='iconBullet'/> Coding Testing</p>
                                                <p><FaCheckCircle className='iconBullet'/> Implementation</p>
                                            </div>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default Summary;