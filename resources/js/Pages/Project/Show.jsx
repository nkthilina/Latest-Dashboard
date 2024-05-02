import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import { Head } from "@inertiajs/react";

function Show({ auth, project }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight">
          {`Project "${project.name}"`}
        </h2>
      }
    >
      {/* <Head title={`Project "${project.name}"`} /> */}
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
      <section className="container px-4 mx-auto mt-5 ">
        <div className="flex flex-col bg-black">
          <div className="-mx-4 -my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <div className="p-6">
                  <img
                    src={project.image_url}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 grid gap-1 grid-cols-2 mt-2">
                  <div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project ID
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.id}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project Name
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.name}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Project Status
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Created By
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.createdBy.name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Due Date
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.due_date}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Create Date
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.created_at}
                      </p>
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Updated By
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.updatedBy.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        htmlFor="name"
                      >
                        Description
                      </label>
                      <p className="mt-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  );
}

export default Show;
