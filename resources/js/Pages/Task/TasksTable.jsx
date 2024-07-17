import React, { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";

function TasksTable({
  tasks,
  user,
  success,
  queryParams = null,
  hideProjectColumn = false,
}) {
  const [visible, setVisible] = useState(true);
  queryParams = queryParams || {};

  const searchFieldChange = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("task.index"), queryParams);
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
    router.get(route("task.index"), queryParams);
  };

  const deleteTask = (task) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      router.delete(route("task.destroy", task.id), {
        onSuccess: () => {
          setVisible(true);
          const timer = setTimeout(() => {
            setVisible(false);
          }, 3000);
          return () => clearTimeout(timer); 
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
    <div>
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

      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    ></th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    ></th>
                    {!hideProjectColumn && (
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      ></th>
                    )}
                    <th
                      scope="col"
                      className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <TextInput
                        className="w-full"
                        defaultValue={queryParams.name}
                        placeholder="Task name"
                        onBlur={(e) =>
                          searchFieldChange("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
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

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    ></th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    ></th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 text-nowrap"
                    ></th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-right rtl:text-right text-gray-500 dark:text-gray-400"
                    ></th>
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
                      className="px-4 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Image
                    </th>
                    {!hideProjectColumn && (
                      <th
                        scope="col"
                        className="px-3 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 text-nowrap"
                      >
                        Project Name
                      </th>
                    )}
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
                      className="px-4 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 text-nowrap"
                    >
                      Created by
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 font-normal text-right rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {tasks.data.map((tasks) => (
                    <tr key={tasks.id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>{tasks.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <img
                          src={tasks.image_path}
                          alt=""
                          className="w-28 h-12"
                        />
                      </td>
                      {!hideProjectColumn && (
                        <td className=" py-3   items-center px-3  gap-x-2 text-white  font-normal capitalize">
                          {tasks.project.name}
                        </td>
                      )}
                      <td className=" py-3 items-center px-3  gap-x-2 text-white hover:underline  font-normal cursor-pointer capitalize">
                        <Link href={route("task.show", tasks.id)}>
                          {tasks.name}
                        </Link>
                      </td>
                      <td className="px-4 py-4  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <h2 className=" font-medium text-gray-800 dark:text-white ">
                            <span
                              className={
                                " font-medium  whitespace-nowrap inline-flex items-center px-3 py-1 rounded-full gap-x-2  bg-gray-800 " +
                                TASK_STATUS_CLASS_MAP[tasks.status]
                              }
                            >
                              {TASK_STATUS_TEXT_MAP[tasks.status]}
                            </span>
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {tasks.created_at}
                      </td>
                      <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {tasks.due_date}
                      </td>
                      <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap capitalize">
                        {tasks.createdBy.name}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2 text-right">
                        <Link
                          href={route("task.edit", tasks.id)}
                          className=" transition-colors duration-200  dark:text-indigo-300 dark:hover:text-blue-500 focus:outline-none"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => deleteTask(tasks)}
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
      <Pagination links={tasks.meta.links} />
      {/* pagination end */}
    </div>
  );
}

export default TasksTable;
