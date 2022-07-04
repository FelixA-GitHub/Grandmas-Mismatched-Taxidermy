import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { capitalizeFirstLetter } from "../../utils/helpers";
import "bootstrap/dist/js/bootstrap.min.js";

const Signup = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [createUser, { error }] = useMutation(ADD_USER);

    const [pages] = useState([
        {
            name: "Signup",
            description: 'Signup page'

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
            const { data } = await createUser({ variables: { ...userFormData } });

            Auth.login(data.addUser.token);
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
            <div className='signup-form-container'>
                <Form className="signup-form p-4" noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <div className='d-flex justify-content-center'>
                        <h1 data-testid="h1tag" className="title" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
                    </div>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Signup went wrong!</Alert>

                    <Form.Group className="form-group mt-4">
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your username'
                            name='username'
                            className="form-control mt-1"
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="form-group mt-4">
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Your email address'
                            name='email'
                            className="form-control mt-1"
                            onChange={handleInputChange}
                            value={userFormData.email}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="form-group mt-4">
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Your Password'
                            name='password'
                            className="form-control mt-1"
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        className="btn btn-primary mt-4"
                        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                        type='submit'
                        variant='success'>Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default Signup;