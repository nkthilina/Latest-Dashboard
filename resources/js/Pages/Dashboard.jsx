import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
} from "@/constants";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  myPendingTasks,
  totalPendingTasks,
  myInProgressTasks,
  totalInProgressTasks,
  myCompletedTasks,
  totalCompletedTasks,
  myTasks,
  activeTasks,
  queryParams = null,
}) {
  queryParams = queryParams || {};

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

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold leading-tight  text-lg text-gray-600 ">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      {/* cards */}
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className=" size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-normal text-blue-gray-600">
                Pending Tasks
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {myPendingTasks} / {totalPendingTasks}
              </h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">+55%</strong>&nbsp;than last
                week
              </p>
            </div>
          </div>
          <div className=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className=" size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-normal text-blue-gray-600">
                In Progress Tasks
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {myInProgressTasks} / {totalInProgressTasks}
              </h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">+3%</strong>&nbsp;than last
                month
              </p>
            </div>
          </div>
          <div className=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-normal text-blue-gray-600">
                Completed Tasks
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {myCompletedTasks} / {totalCompletedTasks}
              </h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-red-500">-2%</strong>&nbsp;than
                yesterday
              </p>
            </div>
          </div>
          <div className=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg  -mt-4 grid h-16 w-16 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
            <div className="p-4 text-right -mt-12">
              <p className="block antialiased font-sans text-lg leading-normal font-normal text-blue-gray-600">
                My Tasks
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {myTasks}
              </h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                <strong className="text-green-500">+5%</strong>&nbsp;than
                yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end cards */}

      {activeTasks.data.length > 0 ? (
        // start table
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg text-white">
                <div className="p-4 dark:bg-gray-800">
                  <p className="text-lg font-bold">My Tasks</p>
                </div>

                <table className="min-w-full dark:divide-gray-700">
                  <thead className=" dark:bg-gray-800">
                    <tr>
                      <th className=" p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        ID
                      </th>
                      <th className="p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        Project Name
                      </th>
                      <th className="p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        Name
                      </th>
                      <th className="p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        Status
                      </th>
                      <th className="p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        Priority
                      </th>
                      <th className="p-4 text-nowrap text-gray-500 dark:text-gray-400 text-md font-normal text-left">
                        Due Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y  dark:divide-gray-700 dark:bg-gray-900 text-md">
                    {activeTasks.data.map((task) => (
                      <tr key={task.id}>
                        <td className="p-4 ">{task.id}</td>
                        <td className="p-4 capitalize">
                          <Link
                            href={route("project.show", task.project.id)}
                            className="hover:underline"
                          >
                            {task.project.name}
                          </Link>
                        </td>
                        <td className="p-4 capitalize">
                          <Link
                            href={route("task.show", task.id)}
                            className="hover:underline"
                          >
                            {task.name}
                          </Link>
                        </td>
                        <td className="p-4 ">
                          <span
                            className={
                              " font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                              TASK_STATUS_CLASS_MAP[task.status]
                            }
                          >
                            {TASK_STATUS_TEXT_MAP[task.status]}
                          </span>
                        </td>
                        <td className="p-4 ">
                          <span
                            className={
                              " font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                              TASK_PRIORITY_CLASS_MAP[task.priority]
                            }
                          >
                            {TASK_PRIORITY_TEXT_MAP[task.priority]}
                          </span>
                        </td>
                        <td className="p-4 text-nowrap">{task.due_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        // end table
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
                    Error! No pending & in progress tasks are found related to
                    you. Create a new one.
                  </h5>
                </div>
              </div>
            </div>
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
                    Error! No pending & in progress tasks are found related to
                    you. Create a new one.
                  </h5>
                </div>
              </div>
            </div>
          </div>
      )}

      <Footer className="items-end" />
    </AuthenticatedLayout>
  );
}
