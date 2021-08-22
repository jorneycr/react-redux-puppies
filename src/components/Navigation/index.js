import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navigation.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export const NavigationBar = ({ history, user }) => {
    return (
        <div className="container-fluid">
            <Navbar className="navigation-container" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer', color: 'black' }} onClick={() => history.push('/')}>Redux Puppies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           

                        </Nav>
                        <Nav className="mr-auto">
                            {
                                (user.authUser)?
                                <Nav.Link style={{  color: 'black' }} >{`${user.authUser.fullName}`}</Nav.Link>
                                :
                                <Nav.Link style={{  color: 'black' }} onClick={() => history.push('/login')}>Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

export default withRouter(connect(mapStateToProps, null)(NavigationBar));

