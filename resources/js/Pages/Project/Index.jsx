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

function Index({ auth, projects, queryParams = null, success }) {
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
          success = "Project deleted successfully";
        },
      });
    }
    return;
  };

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
          <div className="py-5 bg-white dark:bg-dark">
            <div className="container">
              <div className="border-green-700 bg-green-200 flex w-full rounded-lg border-l-[6px] px-7 py-8  ">
                <div className="bg-green-700 mr-5 flex h-7 w-full max-w-7 items-center justify-center rounded-md">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_961_15637)">
                      <path
                        d="M8.99998 0.506248C4.3031 0.506248 0.506226 4.30312 0.506226 9C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9C17.5219 4.30312 13.6969 0.506248 8.99998 0.506248ZM8.99998 16.2562C5.00623 16.2562 1.77185 12.9937 1.77185 9C1.77185 5.00625 5.00623 1.77187 8.99998 1.77187C12.9937 1.77187 16.2562 5.03437 16.2562 9.02812C16.2562 12.9937 12.9937 16.2562 8.99998 16.2562Z"
                        fill="white"
                      />
                      <path
                        d="M11.4187 6.38437L8.07183 9.64687L6.55308 8.15625C6.29996 7.90312 5.90621 7.93125 5.65308 8.15625C5.39996 8.40937 5.42808 8.80312 5.65308 9.05625L7.45308 10.8C7.62183 10.9687 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9687 8.69058 10.8L12.3187 7.3125C12.5718 7.05937 12.5718 6.66562 12.3187 6.4125C12.0656 6.15937 11.6718 6.15937 11.4187 6.38437Z"
                        fill="white"
                      />
                    </g>
                    <div>
                      <clipPath id="clip0_961_15637">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </div>
                  </svg>
                </div>
                <div className="w-full ">
                  <h5 className=" text-md font-semibold text-[#004434] leading-relaxed">
                    {success}
                  </h5>
                </div>
              </div>
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
                          {/* <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th> */}
                        </tr>
                      </thead>
                      <thead className="bg-gray-50 dark:bg-gray-800">
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
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
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
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 text-nowrap"
                          >
                            Created by
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-right rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Actions
                          </th>
                          {/* <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th> */}
                        </tr>
                      </thead>
                      <tbody className=" divide-y  dark:divide-gray-700 dark:bg-gray-900 ">
                        {projects.data.map((projects) => (
                          <tr key={projects.id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{projects.id}</span>
                              </div>
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <img
                                src={projects.image_path}
                                alt=""
                                className="w-28 h-12"
                              />
                            </td>
                            <td className=" py-3 text-sm font-medium text-gray-700 ">
                              <div className="inline-flex items-center px-3 py-1 gap-x-2 text-white hover:underline ">
                                <h2 className=" text-sm font-normal cursor-pointer">
                                  <Link
                                    href={route("project.show", projects.id)}
                                  >
                                    {projects.name}
                                  </Link>
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                  {/* <span className=" text-sm font-medium text-gray-700 whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"> */}
                                  <span
                                    className={
                                      "text-sm font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                                      PROJECT_STATUS_CLASS_MAP[projects.status]
                                    }
                                  >
                                    {PROJECT_STATUS_TEXT_MAP[projects.status]}
                                  </span>
                                </h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {projects.created_at}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {projects.due_date}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {projects.createdBy.name}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap space-x-2">
                              <Link
                                href={route("project.edit", projects.id)}
                                className=" transition-colors duration-200  dark:text-indigo-300 dark:hover:text-blue-500 focus:outline-none"
                              >
                                Edit
                              </Link>
                              <button
                                type="button"
                                onClick={(e) => deleteProject(projects)}
                                // onClick={() => destroy(projects.id)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-red-400 hover:text-red-500 focus:outline-none"
                              >
                                Delete
                              </button>
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
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-20 rounded">
            <span>Error! No projects are found. Create a new one.</span>
          </div>
        )}
      </section>

      <Footer />
    </AuthenticatedLayout>
  );
}

export default Index;
