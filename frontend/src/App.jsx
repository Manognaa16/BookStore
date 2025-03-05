import Book from "./books/Book";
import Contactus from "./Contact/Contactus";
import SignUp from "./componenets/SignUp";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authuser, setAuthUser] = useAuth();
  console.log("login user", authuser);
  return (
    <>
      {/* <Home /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authuser ? <Book /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
