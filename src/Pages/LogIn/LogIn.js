import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { LogIn, setLoading } = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Your Email is not verified. Please verify')
                }
            })
            .catch(error => {
                console.error('error: ', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" name="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default LogIn;