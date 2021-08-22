import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/user';
import './login.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


export const Login = ({ user, login, history }) => {

    useEffect(() => {
        if (user.authUser) {
            history.push('/');
        }

    }, [user])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    debugger

    return (
        <div className="login-container">
            <div className="col-sm-12 col-md-6 login-card-form">
                <h2>Bienvenido a Redux Puppis</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={() => login(username, password)} variant="primary" type="submit">
                        Submit
                    </Button>
                    {user.error && (
                        <Alert variant="danger">
                            {user.error}
                        </Alert>
                    )}

                </Form>
            </div>

        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = () => ({
    ...userActions,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Login));