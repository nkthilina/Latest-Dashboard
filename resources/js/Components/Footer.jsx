import React, { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const myImage = "/storage/MyImage.png";

  const images = [
    "/storage/Login.png",
    "/storage/contact.png",
    "/storage/dashboard.png",
    "/storage/restaurant.png",
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
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            Thilina Madhusanka
          </button>{" "}
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
          <li>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              About us
            </button>
          </li>
        </ul>
      </div>
      {/* Modal component */}
      {/* Modal component end */}
    </footer>
  );
}

export default Footer;
