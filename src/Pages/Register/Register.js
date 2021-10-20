import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mb-5'>
            <div>
                <h1>Register</h1>
            </div>
            <>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control w-25" id="exampleInputPassword1" placeholder="Enter Your Password" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control w-25" id="exampleInputPassword1" placeholder="Re-Enter Your Password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="submit" value='Submit' />

                    </div>

                </form>
                <p>Already Have An Account? <Link to='/login'>Sign In</Link></p>

            </>
        </div>
    );
};

export default Register;