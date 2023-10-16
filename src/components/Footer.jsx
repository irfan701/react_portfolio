import {Col, Container, Row} from "react-bootstrap";
import {FaEnvelope, FaFacebook, FaPhone, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Container fluid={true} className="footerSection text-justify">
                <Row>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h1 className="commonTitle">Follow Me</h1>
                        <a className='socialLink' href="#"> <FaFacebook className='iconBullet'/> Facebook</a><br/>
                        <a className='socialLink' href="#"> <FaYoutube className='iconBullet'/> Youtube</a>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h1 className="commonTitle">Address</h1>
                        <p className="commonDescription">#79/6 Residential Aria, 3rd Floor Front Side, Chittagong</p>
                        <p className="commonDescription"><FaEnvelope className='iconBullet'/> irfanhossain701@gmail.com
                        </p>
                        <p className="commonDescription"><FaPhone className='iconBullet'/> 0522210978</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h1 className="commonTitle">Information</h1>
                        <a className="footerLink" to="/about">About Me</a><br/>
                        <a className="footerLink" to="/contact">Contact Me</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                        <h1 className="commonTitle">Legal</h1>
                        <a className="footerLink" to="/refund">Refund Policy</a><br/>
                        <a className="footerLink" to="/terms">Terms And Condition</a><br/>
                        <a className="footerLink" to="/privacy">Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="copyRightSection text-center">
                <a className="copyRightLink" href="#">irfanhossain701@gmail.com &copy; 2020-2023</a>
            </Container>
        </>
    );
};

export default Footer;