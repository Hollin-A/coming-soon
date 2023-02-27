import React from "react";

export const Body = () => {
  return (
    <div className="h-full flex-1 flex justify-center items-center">
      <div className="container text-center">
        <span className="text-secondary uppercase font-sans sm:text-6xl text-5xl font-black">
          we are <br />
          coming soon
        </span>
        <p className="text-white font-sans font-light sm:my-3 my-2 sm:text-base text-sm ">
          We are almost there!
          <br />
          Get notified when the website goes live
        </p>
        <div className="flex justify-center">
          <div className="mb-3 sm:w-96 w-80">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="email"
                className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-primary outline-none transition duration-300 ease-in-out focus:border-primary focus:text-primary focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-primary placeholder:opacity-50"
                placeholder="Enter your email"
                aria-label="email"
                aria-describedby="button-addon1"
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-secondary2 hover:shadow-lg focus:bg-secondary2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary2 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <p className="">Notify Me</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
