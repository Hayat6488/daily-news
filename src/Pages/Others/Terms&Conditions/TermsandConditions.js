import React from 'react';
import { Link } from 'react-router-dom';

const TermsandConditions = () => {
    return (
        <div>
            <h2>Here is out terms & conditions</h2>
            <h2>Go Back To <Link to='/register'>Register</Link></h2>
        </div>
    );
};

export default TermsandConditions;