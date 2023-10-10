import {Col, Container, Row} from "react-bootstrap";
import laravel from "./../assets/images/laravel.svg";
import next from "./../assets/images/nextjs.svg";
import mongoose from "./../assets/images/mongoose.svg";
import redis from "./../assets/images/redis.svg";

const Services = () => {
    return (
        <>
            <Container>
                <h1 className='commonMainTitle'>My Services</h1>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div className="serviceCard">
                            <img src={laravel} alt=""/>
                            <h2 className="commonTitle">Laravel</h2>
                            <p className="commonDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur, omnis?</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="serviceCard">
                            <img src={next} alt=""/>
                            <h2 className="commonTitle">Next JS</h2>
                            <p className="commonDescription">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="serviceCard">
                            <img src={mongoose} alt=""/>
                            <h2 className="commonTitle">Mongoose</h2>
                            <p className="commonDescription">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div className="serviceCard">
                            <img src={redis} alt=""/>
                            <h2 className="commonTitle">Redis</h2>
                            <p className="commonDescription">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default Services;