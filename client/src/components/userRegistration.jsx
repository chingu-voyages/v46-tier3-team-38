import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recigo1 from "../../src/recigo1.png";

const BASE_URL = process.env.REACT_APP_API_BASE_URL + "/registration";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,12}$/;

function userRegistration() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

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
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, matchPwd]);

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
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUsername("");
      setPwd("");
      setMatchPwd("");
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

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/dashboard">Click to view Dashboard</a>
          </p>
        </section>
      ) : (
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
              <div className="w-[95vw] sm:w-auto my-4 flex flex-col items-stretch md:items-center justify-center  bg-gray-50 dark:bg-gray-900 rounded-lg shadow dark:border">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>
                  <p
                    ref={errRef}
                    className={
                      errMsg ? "errmsg" && "text-red-500" : "offscreen"
                    }
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                  >
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
                        aria-describedby="uidnote"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required=""
                        onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          userFocus && !username || !validName
                            ? "visible p-2 text-sm font-light text-gray-500 dark:text-gray-400"
                            : "hidden"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must be 4 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, numbers, underscores, hyphens allowed.
                      </p>
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
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd
                          ? "visible text-sm font-light text-gray-500 dark:text-gray-400"
                          : "hidden"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      6 to 12 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            validMatch && matchPwd
                              ? "valid text-green-800 mx-4"
                              : "hidden"
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validMatch || !matchPwd
                              ? "hidden"
                              : "invalid text-red-600 mx-4"
                          }
                        />
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <p
                        id="confirmnote"
                        className={
                          matchFocus && !validMatch
                            ? "visible p-2 text-sm font-light text-gray-500 dark:text-gray-400"
                            : "hidden"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                      </p>
                    </div>
                    <button
                      disabled={
                        !validName || !validPwd || !validMatch ? true : false
                      }
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to="/"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default userRegistration;