import { Link } from "react-router-dom";
import recigo1 from "../../src/recigo1.png";

const userLogin = () => {
  return (
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
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link to='/forgetPassword' className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* <section>
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
        </section> */}
      </section>
    </main>
  );
};

export default userLogin;
