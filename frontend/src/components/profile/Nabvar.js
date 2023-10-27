import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import axiosInstance from "../../config/axiosInstance";
import { useNavigate } from 'react-router-dom';

export default function Nabvar(props) {
    const changebody = props.bodychangingFunction;
    const userName = props.user.username; // Replace with the user's name
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axiosInstance.delete('/user/logout', {
                data: { username: userName }
            }).then((response) => {
                if (response.status == 200) {
                    navigate(`/login`)
                }
            }).catch((error) => {
                console.log(error.response.data)
            });
        } catch (err) {
            console.log("err=", err);
        }
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><h1><i>Linked In</i></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={(e) => changebody("profile", e)}>Home</Nav.Link>
                        <Nav.Link onClick={(e) => changebody("post", e)}>Make Posts</Nav.Link>
                        <Nav.Link onClick={(e) => changebody("notification", e)}>Notifications</Nav.Link>
                        <Nav.Link onClick={logout}><strong style={{ color: 'red' }}>Logout</strong></Nav.Link>
                        {/* <Nav.Link as={Link} to="/" style={{ color: "red" }}>Log Out</Nav.Link> */}
                    </Nav>
                    <h3 className="d-lg-none d-flex me-2 my-auto" style={{ marginLeft: '10px' }}>{userName}</h3>
                    <h3 className="d-none d-lg-flex me-2 my-auto" style={{ marginLeft: '30px' }}>{userName}</h3>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
