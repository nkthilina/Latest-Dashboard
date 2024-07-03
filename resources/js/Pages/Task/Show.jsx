import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import {
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
} from "@/constants.jsx";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

function Show({ auth, task }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          {`Task "${task.name}"`}
        </h2>
      }
    >
      {/* <Head title={`Task "${task.name}"`} /> */}
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <section className="container px-4 mx-auto mt-5 ">
        <div className="flex flex-col rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="-mx-4 -my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <div className="p-6">
                  <img
                    src={task.image_path}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 grid gap-1 grid-cols-2 ">
                  <div className="grid grid-rows-5 grid-flow-col gap-4">
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Task ID
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {task.id}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Task Name
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {task.name}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Task Status
                      </label>
                      <p className="mt-2 block text-md font-medium text-gray-700 dark:text-gray-300">
                        <span
                          className={
                            "text-sm font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Task Priority
                      </label>
                      <p className="mt-2 block text-md font-medium text-gray-700 dark:text-gray-300">
                        <span
                          className={
                            "text-sm font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                            TASK_PRIORITY_CLASS_MAP[task.priority]
                          }
                        >
                          {TASK_PRIORITY_TEXT_MAP[task.priority]}
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
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {task.createdBy.name}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-5 grid-flow-col gap-4">
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Due Date
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {task.due_date}
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
                        {task.created_at}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300 capitalize"
                        htmlFor="name"
                      >
                        Updated By
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300">
                        {task.updatedBy.name}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300 hover:underline capitalize">
                        <Link href={route("project.show", task.project.id)}>
                          {task.project.name}
                        </Link>
                      </p>
                    </div>
                    <div className="">
                      <label
                        className=" block text-md font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Assigned User
                      </label>
                      <p className=" block text-md font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {task.assignedUser.name}
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
                    {task.description}
                  </p>
                </div>
                <div className="pt-0 p-6 flex justify-end">
                  <Link
                    href={route("task.edit", task.id)}
                    class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-md px-5 py-2 text-center inline-flex items-center  me-2 mb-2"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </AuthenticatedLayout>
  );
}

export default Show;
