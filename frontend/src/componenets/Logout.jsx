import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("logout Sccessfull");
      window.location.reload();
      setTimeout(() => {}, 3000);
    } catch (error) {
      toast.error(error + "Error Loging out");
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="btn btn-error px-3 py-2 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
