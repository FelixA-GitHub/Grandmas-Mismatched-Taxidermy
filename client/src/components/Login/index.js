import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { capitalizeFirstLetter } from "../../utils/helpers";
import "bootstrap/dist/js/bootstrap.min.js";

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const [pages] = useState([
        {
            name: "Login",
            description: 'Login page'

        }
    ]);
    const [currentPage] = useState(pages[0]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        try {
            const { data } = await loginUser({ variables: { ...userFormData } });

            Auth.login(data.login.token);
        }
        catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setUserFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <>
            <div className='d-flex justify-content-center'>
                <h1 data-testid="h1tag" className="title" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
            </div>
            <div className='container'>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Login went wrong!</Alert>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your Email'
                            name='email'
                            onChange={handleInputChange}
                            value={userFormData.email}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Your Password'
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        disabled={!(userFormData.email && userFormData.password)}
                        type='submit'
                        variant='success'>Submit</Button>
                </Form>
            </div>

        </>
    );
};

export default Login;