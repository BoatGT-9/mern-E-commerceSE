import React, { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
const Modal = ({ name }) => {
  const { login ,singUpWithGoogle} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        alert("login success");
        document.getElementById(name).close();
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  };


const singUpWithgoogle = ()=>{
    singUpWithGoogle().then((result)=>{
        const user = result.user;
        console.log(user);
        alert("google SignUp Success");
        document.getElementById("login").close();
    })
    .catch((error) => {
        console.log(error);
      });
}

  return (
    <dialog id={name} className="modal">
      <div className="modal-box">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Login!</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover hover:text-red-700 "
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-red-700 text-white"
            />
          </div>
          <p className="text-center my-2 ">
            Don't have an account ?
            <Link to="/signup" className="underline text-red-700 ml-1">
              Sign Up Now
            </Link>
          </p>
          <button
            htmlFor={name}
            className="btn btn-sm btn-cicle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById(name).close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </form>
        <div className="text-center space-x-3 mb-5 ">
          <button  onClick={singUpWithgoogle} className="btn btn-ghost btn-circle hover:bg-red-700 hover:text-white ">
            <SiGmail />
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-red-700 hover:text-white ">
            <FaFacebookF />
          </button>
          <button className="btn btn-ghost btn-circle hover:bg-red-700 hover:text-white ">
            <FaGithub />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
