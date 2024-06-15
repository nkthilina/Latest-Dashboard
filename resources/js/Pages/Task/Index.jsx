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
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-20 rounded">
            <span>Error! No tasks are found. Create a new one.</span>
          </div>
        )}
      </div>

      <Footer />
    </AuthenticatedLayout>
  );
}

export default Index;
