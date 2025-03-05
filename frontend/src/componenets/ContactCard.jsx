import React from "react";
import { useForm } from "react-hook-form";

function ContactCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="grid place-items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h1 className="text-3xl card-title">Contact Us</h1>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
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
            <div className="mt-4 space-y-2 relative w-64">
              <span>Message</span>
              <input
                type="text"
                id="input-field"
                className="w-80 px-3 py-1 border rounded-md outline-none h-30"
                placeholder="Type your message"
                {...register("message", { required: true })}
              />
              {/* <label
                for="input-field"
                class="absolute left-3 top-6 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Your Label
              </label> */}
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button className="btn btn-active btn-info bg-[#1A77F2]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
