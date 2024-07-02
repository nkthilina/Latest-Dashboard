import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import TasksTable from "../Task/TasksTable";
import Footer from "@/Components/Footer";

function Show({ auth, success, project, tasks, queryParams = null }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          {`Project "${project.name}"`}
        </h2>
      }
    >
      {/* <Head title={`Project "${project.name}"`} /> */}
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
      <section className="container px-4 mx-auto mt-5 ">
        <div className="flex flex-col rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="-mx-4 -my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <div className="p-6">
                  <img
                    src={project.image_path}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 grid gap-1 grid-cols-2 ">
                  <div className="grid grid-rows-4 grid-flow-col gap-4">
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project ID
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.id}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project Name
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.name}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project Status
                      </label>
                      <p className="mt-2 block text-md font-medium text-gray-700 dark:text-gray-300">
                        <span
                          className={
                            "text-sm font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                            PROJECT_STATUS_CLASS_MAP[project.status]
                          }
                        >
                          {PROJECT_STATUS_TEXT_MAP[project.status]}
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Created By
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.createdBy.name}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-4 grid-flow-col gap-4">
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Due Date
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.due_date}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Create Date
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.created_at}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Updated By
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {project.updatedBy.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-0 p-6">
                  <label
                    className="block text-md font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="name"
                  >
                    Description
                  </label>
                  <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {tasks.data.length > 0 ? (
        <section className="container px-4 mx-auto mt-5 ">
          <div className="flex flex-col rounded-lg ">
            <div className="-mx-4 -my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 ">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden  md:rounded-lg ">
                  <TasksTable
                    tasks={tasks}
                    success={success}
                    queryParams={queryParams}
                    hideProjectColumn={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="py-5 bg-white dark:bg-dark container px-4 mx-auto mt-5">
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
                  No tasks are found related to "{project.name}" project. Create a new one.
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </AuthenticatedLayout>
  );
}

export default Show;
