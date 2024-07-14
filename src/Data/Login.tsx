import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
        <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username"
                placeholder="Enter username" required></input>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" 
                placeholder="Enter password" required></input>
          <button type="submit">Login</button>
          <span>Don't have an account? <Link to="/register">Create an Account</Link></span>
        </form>
      </div>
    </>
  );
};

export default Login;
