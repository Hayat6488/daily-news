import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoRef = useRef(user.photoURL)


    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
    }

    const handleChange = event => {
        setName(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={name} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control ref={photoRef} defaultValue={user?.photoURL} type="email" placeholder="Enter email" />
            </Form.Group>
        </Form>
    );
};

export default Profile;