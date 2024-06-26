import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
import Footer from "@/Components/Footer";

function Edit({ auth, project }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name:  project.name ||"",
    status:  project.status ||"",
    description:  project.description || "",
    due_date:  project.due_date || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("project.update", project.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          Edit Project "{project.name}"
        </h2>
      }
    >
      <Head title="Projects" />

      <section className="container px-4 mx-auto mt-5">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg min-w-full divide-y divide-gray-200 dark:bg-gray-800">
                <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 ">
                  { project.image_path && (<div>
                    <img
                      src={project.image_path}
                      alt=""
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  )}
                  <div className="mt-4">
                    <InputLabel
                      forInput="project_image_path"
                      value="Project Image"
                    />
                    <TextInput
                      id="project_image_path"
                      type="file"
                      name="image"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("image", e.target.files[0])}
                    />
                    <InputError message={errors.image} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel forInput="project_name" value="Project Name" />
                    <TextInput
                      id="project_name"
                      type="text"
                      name="name"
                      value={data.name}
                      className="mt-1 block w-full"
                      isFocused={true}
                      onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      forInput="project_description"
                      value="Project Description"
                    />
                    <TextAreaInput
                      id="project_description"
                      type="text"
                      name="description"
                      value={data.description}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("description", e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      forInput="project_due_date"
                      value="Project Deadline"
                    />
                    <TextInput
                      id="project_due_date"
                      type="date"
                      name="due_date"
                      value={data.due_date}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("due_date", e.target.value)}
                    />
                    <InputError message={errors.due_date} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      forInput="project_status"
                      value="Project Status"
                    />
                    <SelectInput
                      id="project_status"
                      name="status"
                      value={data.status}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("status", e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </SelectInput>
                    <InputError message={errors.status} className="mt-2" />
                  </div>
                  <div className="mt-4  flex justify-end">
                    <Link
                      href={route("project.index")}
                      className=" mr-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </AuthenticatedLayout>
  );
}

export default Edit;
