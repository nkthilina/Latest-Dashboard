import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import { useState, useEffect } from "react";

function Index({ user = null, auth, projects, queryParams = null, success }) {
  const [visible, setVisible] = useState(true);
  queryParams = queryParams || {};

  const searchFieldChange = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("project.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChange(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("project.index"), queryParams);
  };

  const deleteProject = (project) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      router.delete(route("project.destroy", project.id), {
        onSuccess: () => {
          setVisible(true);
          const timer = setTimeout(() => {
            setVisible(false);
          }, 3000);
          return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
        },
      });
    }
    return;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      {/* <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              to check whether data is passed or not
              <pre>{JSON.stringify(projects, null, 2)}</pre>
              Projects
            </div>
          </div>
        </div>
      </div> */}

      {/* new table */}
      <section className="container px-4 mx-auto mt-5">
        {/* alert */}
        {success && (
          <div>
            <link
              rel="stylesheet"
              href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
            />
            <div className="place-items-center">
              {visible && (
                <button
                  type="button"
                  className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl">
                      <i className="bx bx-check" />
                    </span>
                    <p className="font-bold">{success}</p>
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
        {/* alert end */}

        {projects.data.length > 0 ? (
          <div>
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className=" dark:bg-gray-800">
                        <tr>
                          <th></th>
                          <th></th>
                          <th
                            scope="col"
                            className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <TextInput
                              className="w-full"
                              defaultValue={queryParams.name}
                              placeholder="Project name"
                              onBlur={(e) =>
                                searchFieldChange("name", e.target.value)
                              }
                              onKeyPress={(e) => onKeyPress("name", e)}
                            />
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <SelectInput
                              className="w-full"
                              defaultValue={queryParams.status}
                              onChange={(e) =>
                                searchFieldChange("status", e.target.value)
                              }
                            >
                              <option value="">Status</option>
                              <option value="pending">Pending</option>
                              <option value="in_progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </SelectInput>
                          </th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <thead className="bg-gray-50 dark:bg-gray-800 text-md">
                        <tr>
                          <TableHeading
                            name="id"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                          >
                            {" "}
                            ID{" "}
                          </TableHeading>
                          <th
                            scope="col"
                            className="px-4 py-3.5  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Image
                          </th>
                          <TableHeading
                            name="name"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                          >
                            {" "}
                            Name{" "}
                          </TableHeading>
                          <TableHeading
                            name="status"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                          >
                            {" "}
                            Status{" "}
                          </TableHeading>
                          <TableHeading
                            name="created_date"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                          >
                            {" "}
                            Created date{" "}
                          </TableHeading>
                          <TableHeading
                            name="due_date"
                            sort_field={queryParams.sort_field}
                            sort_direction={queryParams.sort_direction}
                            sortChanged={sortChanged}
                          >
                            {" "}
                            Due date{" "}
                          </TableHeading>

                          <th
                            scope="col"
                            className="px-4 py-3.5  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 text-nowrap"
                          >
                            Created by
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5  font-normal text-right rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" divide-y  dark:divide-gray-700 dark:bg-gray-900 ">
                        {projects.data.map((projects) => (
                          <tr key={projects.id}>
                            <td className="px-4 py-4 font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{projects.id}</span>
                              </div>
                            </td>
                            <td className="px-4 py-2 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <img
                                src={projects.image_path}
                                alt=""
                                className="w-28 h-12"
                              />
                            </td>
                            <td className=" py-3 font-medium text-gray-700 capitalize">
                              <div className="inline-flex items-center px-3 py-1 gap-x-2 text-white hover:underline ">
                                <h2 className="  font-normal cursor-pointer">
                                  <Link
                                    href={route("project.show", projects.id)}
                                  >
                                    {projects.name}
                                  </Link>
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <h2 className=" font-medium text-gray-800 dark:text-white ">
                                  <span
                                    className={
                                      " font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                                      PROJECT_STATUS_CLASS_MAP[projects.status]
                                    }
                                  >
                                    {PROJECT_STATUS_TEXT_MAP[projects.status]}
                                  </span>
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {projects.created_at}
                            </td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {projects.due_date}
                            </td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap capitalize">
                              {projects.createdBy.name}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap space-x-2 text-right">
                              <Link
                                href={route("project.edit", projects.id)}
                                className=" transition-colors duration-200  dark:text-indigo-300 dark:hover:text-blue-500 focus:outline-none"
                              >
                                Edit
                              </Link>

                              <button
                                type="button"
                                onClick={(e) => deleteProject(projects)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-red-400 hover:text-red-500 focus:outline-none"
                              >
                                Delete
                              </button>
                              {/* {user?.role === "admin" && (
                                <button
                                  type="button"
                                  onClick={(e) => deleteProject(projects)}
                                  className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-red-400 hover:text-red-500 focus:outline-none"
                                >
                                  Delete
                                </button>
                              )} */}
                            </td>
                          </tr>
                        ))}
                        {/* <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <span>#3065</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Jan 5, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 3L3 9M3 3L9 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h2 className="text-sm font-normal">Cancelled</h2>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                              stroke="#667085"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h2 className="text-sm font-normal">Refunded</h2>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h2 className="text-sm font-normal">
                              completed
                            </h2>
                          </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              Andi Lane
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              andi@example.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        Monthly subscription
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            Archive
                          </button>
                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* pagination */}
            <Pagination links={projects.meta.links} />
            {/* end pagination */}
          </div>
        ) : (
          <div className="py-5 bg-white dark:bg-dark">
            <div className="container">
              <div className="border-red-700 bg-red-200 flex w-full rounded-lg border-l-[6px] px-7 py-8  ">
                <div className="bg-red-700 mr-5 flex h-7 w-full max-w-7 items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-red-200"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                  <div>
                    <clipPath id="clip0_961_15637">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </div>
                </div>
                <div className="w-full ">
                  <h5 className=" text-md font-semibold text-red-800 leading-relaxed">
                    Error! No projects are found. Create a new one.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </AuthenticatedLayout>
  );
}

export default Index;
