import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

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
      <section className="container px-4 mx-auto mt-5">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <div className="p-6">
                  <img
                    src={project.image_url}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
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
