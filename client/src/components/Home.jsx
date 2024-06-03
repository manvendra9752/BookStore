import React from "react";

const Home = () => {
  return (
    <div className="mx-auto px-4 md:px-8 dark:bg-slate-900 dark:text-white text-black bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center dark:bg-slate-900 dark:text-white bg-white order-last md:order-1">
        <div className="md:w-1/2 md:text-start m-6 dark:bg-slate-900 dark:text-white">
          <div className="font-bold text-4xl mb-6">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new every day!!!</span>
          </div>
          <p className="font-semibold">
            Lore af aksdjf asjdfia fwifsldj fajjdifwe jflajdfl ajfdjassi jfgh
            lasfj aksdjfl ksjgas jfsdfjs g sf jsf sfjsf jwjfs fs fasjfk lasjfd s
            fsjf sf al jdfadfjs df dfa dfajaoja ijfljdf a fjafss ldfsjdflsajf
          </p>
          <div className="ml-0 mt-7">
            <label className="input bg-white dark:bg-slate-900 dark:text-white input-bordered flex items-center gap-2 h-14 w-[98%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="bg-pink-500 rounded-md text-white p-2 mt-4 text-xs md:text-base hover:bg-pink-600 transition-all">
            Secondary
          </button>
        </div>

        <div className="md:w-1/2 text-center order-first md:order-2 dark:bg-slate-900 dark:text-white">
          <img
            src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1715315913~exp=1715319513~hmac=beb25c03ee885dc79a995957751d9f650efe6dd7427c7a291e06437c091dccd8&w=826"
            className="mx-auto"
            alt="Welcome Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
