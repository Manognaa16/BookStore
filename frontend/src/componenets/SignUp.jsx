import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfullu");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Signup unSuccessfull user exisits");
        }
      });
  };
  return (
    <>
      <Login />
      <div className="flex h-screen items-center justify-center ">
        <div id="my_modal_3" className="p-10 rounded-2xl shadow-xl">
          <div className="">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                X
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-10 ">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Registered?
                  <a
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    SignIn
                  </a>
                </p>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

// <>
//   <div className="flex h-screen items-center justify-center">
//     <div className=" w-[600px] ">
//       <div className="modal-box">
//         <form method="dialog">
//           {/* if there is a button in form, it will close the modal */}
//           <Link
//             to="/"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//           >
//             ✕
//           </Link>

//           <h3 className="font-bold text-lg">Signup</h3>
//           <div className="mt-4 space-y-2">
//             <span>Name</span>
//             <br />
//             <input
//               type="text"
//               placeholder="Enter your fullname"
//               className="w-80 px-3 py-1 border rounded-md outline-none"
//             />
//             <br />
//           </div>
//           {/* Email */}
//           <div className="mt-4 space-y-2">
//             <span>Email</span>
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-80 px-3 py-1 border rounded-md outline-none"
//             />
//             <br />
//           </div>
//           {/* Password */}
//           <div className="mt-4 space-y-2">
//             <span>Password</span>
//             <br />
//             <input
//               type="text"
//               placeholder="Enter your password"
//               className="w-80 px-3 py-1 border rounded-md outline-none"
//             />
//             <br />
//           </div>
//           {/* Button */}
//           <div className="flex justify-around mt-4">
//             <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//               Signup
//             </button>
//             <p className="text-xl">
//               Have account?{" "}
//               <button
//                 className="underline text-blue-500 cursor-pointer"
//                 onClick={() =>
//                   document.getElementById("my_modal_3").showModal()
//                 }
//               >
//                 Login
//               </button>{" "}
//               <Login />
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </>;
