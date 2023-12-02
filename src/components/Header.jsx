import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-white px-6 shadow">
        <div className="flex justify-between h-16 items-center max-w-6xl mx-auto">
          <button className=" rounded p-1 -m-1 text-slate-500 cursor-pointer hover:text-slate-100 hover:bg-sky-500 transition-colors focus:ring-2 focus:ring-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="flex -mr-4 items-center ">
            <div className="hover:rotate-6 duration-200 text-sky-500 hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>

            <div className="space-x-8 ml-8 hidden sm:flex">
              <div className="text-slate-600 px-3 py-2 cursor-pointer hover:text-sky-500 transition-colors">
                Home
              </div>

              <div className="text-slate-600 px-3 py-2 cursor-pointer hover:text-sky-500 transition-colors">
                About
              </div>

              <div className="text-slate-600 px-3 py-2 hover:cursor-pointer hover:text-sky-500 transition-colors">
                Blog
              </div>

              <div className="text-slate-600 px-3 py-2 hover:cursor-pointer hover:text-sky-500 transition-colors">
                Contact
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="rounded-full text-slate-500 hover:text-sky-500 transition-colors focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
            <button className="ml-4 rounded-full text-slate-500 hover:text-sky-500 transition-colors focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
              <img
                className="w-6 h-6 rounded-full"
                src="https://ui-avatars.com/api/?name=Domenico+Gallo"
                alt="Domenico Gallo"
              />
            </button>
          </div>
        </div>
        <div className="space-y-1 border-t pb-3 pt-2 sm:hidden">
          <div className="block rounded-md bg-sky-500 px-3 py-2 text-white">
            Home
          </div>

          <div className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white">
            About
          </div>

          <div className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white">
            Blog
          </div>

          <div className="block rounded-md px-3 py-2 text-slate-700 transition-colors hover:bg-sky-500 hover:text-white">
            Contact
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
