import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile({ name, photoURL })
      .then(() => {
        alert("Profile Update!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" max-w-md bg-white shadow-w-full mx-auto flex-items-center justify-center my-40">
      <form
        className="card-body flex flex-col justify-center text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-bold text-lg ">Update Profile</h3>
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
            <span className="label-text">Image profile</span>
          </label>
          <input
            type="text"
            placeholder="Image Profile"
            className="input input-bordered"
            required
            {...register("photoURL")}
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update !!!"
            className="btn bg-red-700 text-white"
          />
        </div>
        {/* <p className="text-center my-2 ">
        Have an account ?
        <button
          onClick={() => document.getElementById("login").showModal()}
          className="underline text-red-700 ml-1"
        > Login Now
        </button>
      </p> */}
      </form>
    </div>
  );
};

export default UpdateProfile;
