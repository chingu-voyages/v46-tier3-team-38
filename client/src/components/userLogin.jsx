import recigo1 from "../../src/recigo1.png";

const userLogin = () => {
  return (
    <main>
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
        <section>
          <div className=" m-10">
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
                  <span className="text-orange-400 select-all">Here</span>
                </h2>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default userLogin;
