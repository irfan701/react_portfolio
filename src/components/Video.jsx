import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FaPlayCircle} from "react-icons/fa";
import {Player, BigPlayButton} from 'video-react';
import redis from './../assets/images/redis.svg'
import {useState} from "react";
import 'video-react/dist/video-react.css';

const Video = () => {

    const [show, setShow] = useState(false)
    const modalClose = () => setShow(false)
    const modalOpen = () => setShow(true)


    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="videoCard">
                            <p className="videoTitle">HOW I DO</p>
                            <p className="videoDes">First i analysis the requirement of project. According to the
                                requirement i make a proper technical analysis, then i build a software architecture.
                                According to the planning i start coding. Testing is also going on with coding. Final
                                testing take place after finishing coding part. After successful implementation i
                                provide 6 month free bug fixing service for corresponding project.</p>
                            <p>
                                <FaPlayCircle className='playBtn' onClick={modalOpen}/>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal size="lg" show={show} onHide={modalClose}>
                <Modal.Body>
                    <Player poster={redis} playsInline>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                        <BigPlayButton position="center"/>
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={modalClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    );
};

export default Video;