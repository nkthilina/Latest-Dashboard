// import { useState } from "react";
import React, { useState, useEffect, useRef } from "react";
// import ApplicationLogo from "@/Components/ApplicationLogo";
// import Dropdown from "@/Components/Dropdown";
// import NavLink from "@/Components/NavLink";
// import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function AuthenticatedLayout({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  //Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-50/50 ">
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
          <div className="relative border-b border-white/20">
            <div className="flex items-center gap-4 py-6 px-8" href="#/">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                Admin Nexus
              </h6>
            </div>
          </div>
          <div className="m-4">
            <ul className="mb-4 flex flex-col gap-1">
              <li>
                <Link
                  href={route("dashboard")}
                  active={route().current("dashboard")}
                  className="group middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4  capitalize"
                >
                  <button
                    className="middle none font-sans  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-5 group-hover:size-6 text-inherit"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("project.index")}
                  active={route().current("project.index")}
                  className="block antialiased font-sans  leading-relaxed text-inherit capitalize group"
                >
                  <button
                    className="middle none font-sans  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3  rounded-lg text-white group-hover:bg-white/10 group-hover:duration-600 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 group-hover:size-6 text-inherit "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("task.index")}
                  active={route().current("task.index")}
                  className="block antialiased font-sans  leading-relaxed text-inherit capitalize group"
                >
                  <button
                    className="middle none font-sans  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg text-white group-hover:bg-white/10 group-hover:duration-600 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-5 group-hover:size-6 text-inherit group-hover:duration-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:duration-600">Tasks</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("user.index")}
                  active={route().current("user.index")}
                  className="block antialiased font-sans  leading-relaxed text-inherit capitalize group"
                >
                  <button
                    className="middle none font-sans  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg text-white group-hover:bg-white/10 group-hover:duration-600 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-5 group-hover:size-6 text-inherit group-hover:duration-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:duration-600">Users</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("task.myTasks")}
                  active={route().current("task.myTasks")}
                  className="block antialiased font-sans  leading-relaxed text-inherit capitalize group"
                >
                  <button
                    className="middle none font-sans  center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg text-white group-hover:bg-white/10 group-hover:duration-600 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 group-hover:size-6 text-inherit group-hover:duration-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="group-hover:duration-600">My Tasks</span>
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="mb-4 flex flex-col gap-1">
              <li className="mx-3.5 mt-4 mb-2">
                <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
                  auth pages
                </p>
              </li>
              <li>
                <Link href={route("project.create")} className="group">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 group-hover:w-8 group-hover:h-8 group-hover:rotate-90 group-hover:duration-700 mr-3 group-hover:mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      Add projects
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href={route("task.create")} className="group">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 group-hover:w-8 group-hover:h-8 group-hover:rotate-90 group-hover:duration-700 mr-3 group-hover:mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <span className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      Add tasks
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href={route("user.create")} className="group">
                  <button
                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 group-hover:w-8 group-hover:h-8 group-hover:rotate-90 group-hover:duration-700 mr-3 group-hover:mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <span className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                      Add users
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* <!-- header --> */}
        <div className="p-4 xl:ml-80">
          {header && (
            <header>
              <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center ml-5">
                  <div className="capitalize">
                    <nav aria-label="breadcrumb" className="w-max">
                      <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                        <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                          <a href="#">
                            <p className="block antialiased font-sans text-lg leading-normal text-blue-900 font-bold opacity-60 transition-all hover:text-blue-500 hover:opacity-100">
                              dashboard
                            </p>
                          </a>
                          <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
                            /
                          </span>
                        </li>
                        <li className="flex items-center opacity-60 text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500 hover:opacity-100">
                          <p className="block antialiased font-sans text-lg leading-normal text-blue-gray-900 font-bold">
                            Home
                          </p>
                        </li>
                      </ol>
                    </nav>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900 cursor-pointer">
                      {header}
                    </h6>
                  </div>

                  <div className="flex items-center mr-5">
                    <div className="bg-gray-100 flex items-center justify-center">
                      <div className="relative inline-block text-left">
                        <button
                          ref={dropdownButtonRef}
                          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                          onClick={toggleDropdown}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5 text-blue-gray-500 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {user.name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          ref={dropdownMenuRef}
                          className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                            isDropdownOpen ? "" : "hidden"
                          }`}
                        >
                          <div
                            className="py-2 p-2"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="dropdown-button"
                          >
                            <Link
                              href={route("profile.edit")}
                              className=" block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                              role="menuitem"
                              onClick={() =>
                                console.log("Light theme selected")
                              }
                            >
                              Profile
                            </Link>
                            <Link
                              method="post"
                              href={route("logout")}
                              className=" block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                              role="menuitem"
                              onClick={() => console.log("Dark theme selected")}
                            >
                              Log Out
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                      type="button"
                    >
                      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          strokeWidth={3}
                          className="h-6 w-6 text-blue-gray-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                    <a href="#">
                      <button
                        className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5 text-blue-gray-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </nav>
            </header>
          )}

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
