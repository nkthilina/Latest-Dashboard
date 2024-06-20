import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import TasksTable from "./TasksTable";

function Index({ auth, success, tasks, queryParams = null }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />

      {/* <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              to check whether data is passed or not
              <pre>{JSON.stringify(tasks, null, 2)}</pre>
              Tasks
            </div>
          </div>
        </div>
      </div> */}

      <div className="container px-4 mx-auto mt-5">
        {tasks.data.length > 0 ? (
          <TasksTable
            tasks={tasks}
            queryParams={queryParams}
            success={success}
          />
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
                  Error! No tasks are found. Create a new one.
                </h5>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      <Footer />
    </AuthenticatedLayout>
  );
}

export default Index;
