import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogIn} = useContext(AuthContext);

    const googleProvide = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvide)
        .then(result => {
            const user = result.user;
        })
        .catch(error => {
            console.error('error: ', error);
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 rounded' variant="outline-primary"><FaGoogle /> <span className='text-black'>Log In with Google</span></Button>
                <Button className='mb-2 rounded' variant="outline-dark"><FaGithub /> Log In with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h6>Find Us On</h6>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded border'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;