/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, image, email, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Minimum six characters, at least one letter and one number");
      Swal.fire({
        title:"Error!!!",
        text:"Minimum six characters, at least one letter and one number",
        icon: "error",
        confirmButtonText: "Ok"
    })
    }

    
    createUser( email, password,)
    .then((result) => {
      handleUpdateProfile(name, image)
      .then(() => {
        console.log(result.user);
          navigate(location?.state ? location.state : "/");
      })
     
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <div className="hero min-h-screen spaceGrotesk"
        style={{
          backgroundImage:
          "url(https://i.ibb.co/hd7Qgyf/man-search-hiring-job-online-from-laptop-1150-52728.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col ">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold py-5">Register now!</h1>

          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl themeColor">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Profile Picture</span>
                </label>
                <input type="text" name="image" placeholder="Enter image url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                </label>
              </div>
              <div>
              <p className="text-red-500 font-bold"></p>
              <div>
              <p className="text-red-500 font-bold">{error}</p>
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#0a183b]">Register</button>
              </div>
              <p className="text-white">
              Already Have an Account? Please{" "}
              <Link to="/login">
                <button className="btn-link font-bold">Login</button>
              </Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;