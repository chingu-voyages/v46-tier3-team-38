import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recigo1 from "../../src/recigo1.png";
import backendAPI from "../helper/BackendApi";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,12}$/;

const UserLogin = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  const handleSubmit = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setSuccess(true);
      loginUser();
      setUsername("");
      setPwd("");

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };


  const loginUser = async () => {
    console.log('Login User');
    try {
      const response = await backendAPI.login(username, pwd);
      setSuccess(response);
    } catch (e) {
      console.log('something went wrong while Login user', e);
      setErrMsg(e);
    }
  }

  return (
    success ? (
      <section>
        <h1>Success!</h1>
        <p>
          <a href="/dashboard">Click to view Dashboard</a>
        </p>
      </section>
    ) :
      <main>
        <section>
          <div className="flex flex-col justify-center items-center bg-yellow-50">
            <div className="p-4 rounded-lg text-center">
              <img
                src={recigo1}
                alt="Recigo Logo"
                className="w-32 h-32 mx-auto rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-semibold tracking-wide leading-loose">
                Discover, Cook, Enjoy
              </h1>
              <p className="text-xl leading-loose">
                Your Recipe Journey Starts Here!
              </p>
            </div>
            <div className="w-[95vw] sm:w-auto my-4 flex flex-col items-stretch md:items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg shadow dark:border">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                {
                  errMsg &&
                  <div
                    ref={errRef}
                    role="alert"
                    aria-live="assertive"
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  >
                    {errMsg}
                  </div>
                }
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={
                          validName ? "valid text-green-800 mx-4" : "hidden"
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validName || !username
                            ? "hidden"
                            : "invalid text-red-600 mx-4"
                        }
                      />
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      aria-invalid={validName ? "false" : "true"}
                      placeholder="kanchan"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="current-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={
                          validPwd ? "valid text-green-800 mx-4" : "hidden"
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validPwd || !pwd
                            ? "hidden"
                            : "invalid text-red-600 mx-4"
                        }
                      />
                    </label>
                    <input
                      type="current-password"
                      name="current-password"
                      id="current-password"
                      placeholder="••••••••"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Link
                      to="/forgetPassword"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/registration"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default UserLogin;



/* <section>
  <div className="m-10">
    <form className="mt-8 p-4 rounded-lg shadow-md text-center w-96">
      <h2 className="text-xl font-semibold leading-loose">Sign In</h2>
      <label>
        <p className="leading-loose">Username</p>
        <input type="text" className="bg-slate-200" />
      </label>
      <label>
        <p className="leading-loose">Password</p>
        <input type="current password" className="bg-slate-200" />
      </label>
      <div>
        <button
          type="submit"
          className="m-4 px-4 leading-loose rounded bg-blue-300"
        >
          Sign In
        </button>
        <h2 className="text-xl font-semibold leading-loose">
          Need An Account? Sign Up{" "}
          <span className="text-orange-400 select-all">
            <Link to="/registration">Here</Link>
          </span>
        </h2>
      </div>
    </form>
  </div>
</section> */