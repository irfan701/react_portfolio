import {Button, Card, Col, Container, Row} from "react-bootstrap";

const RecentProjects = () => {
    return (
        <>
            <Container className="text-center">
                <h1 className='commonMainTitle'>Recent Projects</h1>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDes">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default RecentProjects;