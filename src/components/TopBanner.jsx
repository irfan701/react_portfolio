import {Col, Container, Row} from "react-bootstrap";

const TopBanner = () => {
    return (
        <>
            <Container className='topFixedBanner' fluid={true}>
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="topTitle">Software Engineer</h1>
                                <h4 className="topSubTitle">Mobile & Web Application</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default TopBanner;