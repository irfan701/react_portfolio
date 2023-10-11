import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Col, Container, Row} from "react-bootstrap";

const Analysis = () => {

    let data = [
        {Technology: 'Laravel', Projects: "100"},
        {Technology: 'Mern Stack', Projects: "90"},
        {Technology: 'socket.io', Projects: "80"},
        {Technology: 'Next Js', Projects: "70"},
        {Technology: 'Vue Js', Projects: "50"},
    ]

    let fillColor = "#4C9DED"
    return (

        <>
            <Container>
                <h1 className="commonMainTitle">Technology Used</h1>
                <Row>
                    <Col style={{height: 300}} sm={12} md={12} lg={6}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Projects" fill={fillColor}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={6}>
                        <p className="text-justify des">


                            In advancement world of Informations Technologies, there's no stopping, you need to always
                            keep up with the current trends. As your trusted Web Developer, I have all the ideas and
                            skills to build amazing apps that boost your business to the next level!

                            I recognize the intensity involved in a web application development project or a web portal
                            design project and I'm excited to know and use the most modern PHP frameworks and Javascript
                            libraries involved in the development of modern websites, and scalable applications,
                            providing unique insight and help with every aspect of your project development, from its
                            consulting and strategy to its implementation and integration. This leads to a professional
                            software development process that translates into a competitive advantage for my clients. I
                            will tailor the software development project around your company's services, objectives, and
                            of course, your budget.

                            Using the Agile Methodology during the development to deliver web-based solutions, I can
                            create an application that will meet your specific user, business, industry, or vertical
                            needs. The Agile Methodology is not based on the classic and linear design approach, but on
                            an innovative development cycle system where customer satisfaction and software efficiency
                            are the main objectives. The project is splitted into short phases, called "sprint", each
                            sprint corresponds to the development of a business feature at the end of which, even
                            involving the client, its success is evaluated in order to easily modify the project in an
                            "agile way" or move to the next sprint. With the Laravel Framework and the React JS library
                            it's also easier thanks to the integrated support of many standard features for the web
                            programmer.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Analysis;