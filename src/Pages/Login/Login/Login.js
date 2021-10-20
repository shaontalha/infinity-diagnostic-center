import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className='mx-5 mb-5'>
            <h2>Please Login</h2>
            <>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control w-25" id="exampleInputPassword1" placeholder="Enter Your Password" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </>
            <p>New to this site? <Link to='/register'>Create Account</Link></p>
            <div>-------or-------</div>
            <button onClick={handleGoogleLogin} className='btn btn-warning mt-5'>
                Google Sign In
            </button>
        </div>
    );
};

export default Login;