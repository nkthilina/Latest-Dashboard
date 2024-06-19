import React, { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    "https://unsplash.it/640/425?image=30",
    "https://unsplash.it/640/425?image=40",
    "https://unsplash.it/640/425?image=50",
  ];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

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
      {/* testing Modal component */}
      <div>
        {showModal && (
          <div className="fixed inset-0 z-10">
            <div className="fixed inset-0 bg-gray-500 opacity-60" />

            <div className="fixed end-5 bottom-0 p-10 z-20">
              <div className="relative max-w-4xl rounded-lg bg-gray-100 p-6 shadow-sm">
                <button
                  type="button"
                  className="group absolute -end-1 hover:-end-2 -top-1 hover:-top-2 rounded-full border border-gray-200 bg-gray-200 p-1 text-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 group-hover:size-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <main className=" place-content-center ">
                    <div className="relative  overflow-hidden rounded-md bg-gray-100">
                      <div className="absolute right-12 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
                        <span>{currentIndex}</span>/<span>{images.length}</span>
                      </div>

                      <button
                        onClick={previous}
                        className="absolute left-2 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-2xl font-bold text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={forward}
                        className="absolute right-12 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-2xl font-bold text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>

                      <div className="relative h-60 w-96">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute top-0 transition-opacity duration-300 ${
                              currentIndex === index + 1
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              className="rounded-sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </main>
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-full w-full rounded-xl object-cover"
                  /> */}

                  <div>
                    <h2 className="text-lg font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h2>

                    <p className="mt-4 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, eos. Inventore dolor delectus commodi
                      laudantium adipisci, illum amet itaque optio!
                    </p>

                    <div className="mt-6 sm:text-right">
                      <a
                        href="#"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                      >
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
      {/* Modal component end */}
    </footer>
  );
}

export default Footer;
