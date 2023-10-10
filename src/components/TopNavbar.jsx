import logo1 from './../assets/images/logo-gradient.png'
import logo2 from './../assets/images/logo-blue.png'
import {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const TopNavbar = () => {

    let Links = [
        {name: "Home", link: "/"},
        {name: "Service", link: "/"},
        {name: "Courses", link: "/"},
        {name: "Portfolio", link: "/"},
        {name: "Contact", link: "/"},
        {name: "About", link: "/"},
    ]

    const [navObject, setNavObject] = useState({
        navBarTitle: "navTitle",
        navBarLogo: [logo1],
        navBarBg: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark"
    })
    const onScroll = () => {
        if (window.scrollY > 100) {
            setNavObject(prevObject => ({
                ...prevObject,
                navBarTitle: "navTitleScroll",
                navBarLogo: [logo2],
                navBarBg: "navBackgroundScroll",
                navBarItem: "navItemScroll",
                navVariant: "light"

            }))

        } else if (window.scrollY < 100) {
            setNavObject(prevObject => ({
                ...prevObject,
                navBarTitle: "navTitle",
                navBarLogo: [logo1],
                navBarBg: "navBackground",
                navBarItem: "navItem",
                navVariant: "dark"
            }))
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" className={navObject.navBarBg}
                    variant={navObject.navVariant}>
                <Container>
                    <Navbar.Brand href="#home" className={navObject.navBarTitle}>
                        <img width="40" src={navObject.navBarLogo} className=''/> Irfan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {Links.map((link, i) => {
                                return <li key={i.toString()} className=''>
                                    <Nav.Link href={link.link} className={navObject.navBarItem}>{link.name}</Nav.Link>
                                </li>
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default TopNavbar;

