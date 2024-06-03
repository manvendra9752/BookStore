import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8080/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("LoggedIn Successfully");
          window.location.reload();
          document.getElementById("my_modal_3").close();
          // setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          // }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
          // console.log(err);
          // setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box shadow-2xl dark:bg-slate-900 dark:text-white bg-white w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[85%] md:w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 bg-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[85%] md:w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-900 dark:text-white "
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
            <div className="flex justify-around mt-6">
              <button
                className="bg-pink-500 text-white rounded-md md:px-3 md:py-1 hover:bg-pink-700 px-3 text-sm h-8 duration-200 md:w-20 "
                type="submit"
              >
                Login
              </button>
              <p className="text-sm ml-4 md:m-0">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer "
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
