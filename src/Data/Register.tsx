import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">  
            <h1>Registration</h1>
            <form className="form-group" action="/register" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username"
                placeholder="Enter username" required></input>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" 
                placeholder="Enter password" required></input>
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" id="password2" name="password
                " placeholder="Confirm password" required></input>
                <button type="submit" className="btn btn-primary">Register</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
                </form>
            </div>
        </div>
    );
}

export default Register