import React, { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="py-2 items-end bottom-0  text-blue-gray-600 mt-5">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
          © 2024, made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-0.5 inline-block h-3.5 w-3.5"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com"
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            Thilina Madhusanka
          </a>{" "}
          for a better web.{" "}
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/thilina-madhusanka-9585a81a9/"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nkthilina?tab=overview&from=2024-06-01&to=2024-06-09"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              GitHub
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.creative-tim.com/blog"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              About us
            </a>
          </li> */}

          {/* testing */}
          <li>
            {/* Button to open the modal */}
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              About us
            </button>
          </li>
          {/* end testing */}
        </ul>
      </div>

      {/* Modal component */}
      <div className="flex items-center justify-center ">
        {showModal && (
          <div className="">
            {/* Background overlay */}
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            {/* Modal */}
            <div className="fixed z-10 inset-0 overflow-y-auto ">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
                {/* Modal panel */}
                <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                    {/* Modal content */}
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:flex-row-reverse">
                        <button
                          onClick={() => setShowModal(false)}
                          className="absolute top-1 right-0 pt-4 pr-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          Delete Item{" "}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete{" "}
                            <span className="font-bold">Sample Item</span>? This
                            action cannot be undone.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* testing Modal component */}
      <div className="flex items-center justify-center ">
        <div className="">
          {/* Background overlay */}
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="absolute inset-0 bg-gray-500 opacity-95" />
          </div>
          {/* Modal */}
          <div className="fixed z-10 inset-0 overflow-y-auto ">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
              <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="flex bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:flex-row-reverse">
                      {/* <button className="absolute top-1 right-0 pt-4 pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div>
                  <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
                  <button className="absolute  top-14 right-2  pr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">


                      <div className="lg:w-1/2">
                        <div
                          className=" bg-cover lg:rounded-lg lg:h-full"
                          style={{
                            backgroundImage:
                              'url("https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")',
                          }}
                        />
                      </div>
                      <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 className="text-3xl text-gray-800 font-bold">
                          Build Your New{" "}
                          <span className="text-indigo-600">Idea</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quidem modi reprehenderit vitae exercitationem
                          aliquid dolores ullam temporibus enim expedita aperiam
                          mollitia iure consectetur dicta tenetur, porro
                          consequuntur saepe accusantium consequatur.
                        </p>
                        <div className="mt-8">
                          <a
                            href="#"
                            className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                          >
                            Start Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal component end */}
    </footer>
  );
}

export default Footer;
