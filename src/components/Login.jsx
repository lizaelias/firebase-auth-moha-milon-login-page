import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Authproviders";


const Login = () => {

  const {signInUser,signInWithGoogle} =useContext(AuthContext);
  const navigate =useNavigate();

    const handleLogin = e =>{
          e.preventDefault();
         const email = e.target.email.value;
         const password =e.target.password.value;
         console.log(email,password)

         signInUser(email, password)
         
         .then(result =>{
          console.log(result.user)
          e.target.reset();
          navigate("/home")
         })
         .catch(error => {
          console.log(error)
         })
         

    }
    const handleGoogle =()=>{
      signInWithGoogle()
      .then(result =>{
        console.log(result.user);

      })
      .catch(error =>{
        console.log(error);
      })
      
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
              <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
            </div>
            <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
             </div>

          < div className="form-control mt-6">
         <button  className="btn btn-primary" type="submit">Login</button>
  </div>
</form>

             
            

             
            

              <p>New Here ? please <Link to="/register">
             <button className="btn btn-link">login</button>
             </Link></p>
             <p><button onClick={signInWithGoogle} className="btn btn-ghost"> Google</button></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;