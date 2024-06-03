import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8080/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully..");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        Navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen dark:bg-slate-800 dark:text-white bg-white  items-center justify-center">
        <div className="md:w-[600px] w-[400px]  ">
          <div className="modal-box  dark:bg-slate-900 dark:text-white shadow-2xl bg-white text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg ">Signup</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-[85%] md:w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-900 dark:text-white"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.name && (
                  <div className="text-sm text-orange-400">
                    This field is required
                  </div>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[85%] md:w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white bg-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <div className="text-sm text-orange-400">
                    This field is required
                  </div>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-[85%] md:w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white bg-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <div className="text-sm text-orange-400">
                    This field is required
                  </div>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md md:px-3 md:py-1 px-4 h-10 text-sm hover:bg-pink-700 duration-200 "
                >
                  Signup
                </button>
                <p className=" text-base md:text-xl">
                  Have account?{" "}
                  <Link to="/">
                    {" "}
                    <button
                      className="underline text-blue-500 cursor-pointer"
                      // onClick={() =>
                      //   document.getElementById("my_modal_3").showModal()
                      // }
                    >
                      Login
                    </button>{" "}
                    <Login />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
