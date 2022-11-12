import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as Resume } from "../resume.svg";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = async () => {
    let user = null;
    try {
      user = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }

    if (user) {
      console.log(user);
      navigate("/home");
    }
  };

  return (
    <div className="bg-gray-700 text-white min-h-screen">
      <div class="pt-12 pr-12 float-right">
        <HighlightOffIcon class="h-8 w-8 invert cursor-pointer" onClick={() => navigate("/get-started")} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
        class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="mt-10 w-full max-w-md space-y-8">
          <div class="flex flex-col items-center">
            <Resume class="text-center h-40 w-40" />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight ">
              Log in to your account
            </h2>
          </div>
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                for="email-address"
                class="block tracking-wide text-xs font-bold mt-4 mb-2">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                class="relative block w-full text-gray-700 appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="password"
                class="block tracking-wide text-xs font-bold mt-4 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                class="relative block w-full text-gray-700 appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {error && <p>{error}</p>}

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <label for="remember-me" class="ml-2 block text-sm">
                Don't have an account yet?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  class="underline color-blue cursor-pointer text-blue-200">
                  {" "}
                  Signup
                </span>
              </label>
            </div>
          </div>

          <div>
            <button
              onClick={() => login()}
              class="group relative flex w-full justify-center rounded-md border py-2 px-4 text-sm bg-indigo-600 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Log in
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;