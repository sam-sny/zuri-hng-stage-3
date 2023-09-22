import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/firebaseStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"; // Added eye icons
import useAuth from "../../hooks/UseAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const errRef = useRef();
  const userRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const eyeIcon = showPassword ? faEyeSlash : faEye; // Icon changes based on password visibility

  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setEmail("");
      setPassword("");
      const user = userCredential.user;
      setAuth({ auth: user });
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      setErrMsg(error.message);
    }
  };

  return (
    <section className="flex justify-center w-full h-screen">
      <section className="relative flex flex-col items-center justify-center w-1/2 h-screen bg-white">
        
        <form
          onSubmit={signIn}
          className="h-[80vh] w-[350px] rounded bg-slate-50 shadow-md py-6 flex flex-col items-center "
        >
          <div className="h-1/4 bg-inherit flex flex-col items-center justify-center w-full gap-4 text-blue-800">
            <div className="flex items-center justify-center">
              <span className="md:h-12 md:w-12 flex items-center justify-center w-10 h-10 text-2xl text-black rounded-full">
                <FontAwesomeIcon icon={faImages} className="text-blue-800" />
              </span>
              <h2 className="bg-inherit text-2xl font-semibold">
                SAM_SNY Gallery
              </h2>
            </div>
            {errMsg && (
              <p
                ref={errRef}
                className="text-red-600"
                aria-live="assertive"
              >
                {errMsg}
              </p>
            )}
          </div>

          <section className="h-3/5 bg-inherit flex flex-col items-center gap-4">
            <section className="bg-inherit w-full p-1 rounded-md">
              <label className="hidden" htmlFor="Email">
                Email
              </label>
              <input
                className="border-sky-950 w-full h-12 px-8 py-3 border outline-none rounded-full"
                type="text"
                name="Email"
                id="Email"
                ref={userRef}
                placeholder="Your Email"
                required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </section>

            <section className="bg-inherit w-full p-1 rounded-md relative">
              <label className="hidden" htmlFor="password">
                Password
              </label>
              <input
                className="border-sky-950 w-full h-12 px-8 py-3 border outline-none rounded-full pr-12" // Added right padding for the eye icon
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                name="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-4 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={eyeIcon} className="text-blue-800" />
              </span>
            </section>

            {/* "Forgot Password" link */}
            <div className="text-blue-800 text-sm cursor-pointer hover:underline self-end">
              Forgot Password
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="hover:opacity-95 focus-within:opacity-95 w-2/3 h-10 text-white bg-blue-800 border-none cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>

            {/* Sign-up button */}
            <button
              type="button"
              className="hover:opacity-95 focus-within:opacity-95 w-2/3 h-10 text-white bg-green-500 border-none cursor-pointer"
            >
              Sign Up
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default Login;
