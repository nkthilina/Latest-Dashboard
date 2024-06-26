import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
import Footer from "@/Components/Footer";

function Edit({ auth, task, projects, users }) {
  const { data, setData, post, errors, reset } = useForm({
    project_id: task.project_id,
    image: "",
    name: task.name || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
    priority: task.priority || "",
    assigned_user_id: task.assigned_user_id || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("task.update", task.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-lg text-gray-600  leading-tight">
          Edit Task "{task.name}"
        </h2>
      }
    >
      <Head title="Tasks" />

      <section className="container px-4 mx-auto mt-5">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg min-w-full divide-y divide-gray-200 dark:bg-gray-800">
                <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 ">
                {/* {data.project_id} */}
                  <div className="mt-4">
                    <InputLabel
                      forInput="task_project_id"
                      value="Project Name"
                    />
                    <SelectInput
                      name="project_id"
                      id="project_id"
                      value={data.project_id}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("project_id", e.target.value)}
                    >
                      <option value="">Select Project</option>
                      {projects.data.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </SelectInput>
                    <InputError message={errors.project_id} className="mt-2" />
                  </div>

                  {task.image_path && (
                    <div>
                      <img
                        src={task.image_path}
                        alt=""
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  <div className="mt-4">
                    <InputLabel forInput="task_image_path" value="Task Image" />
                    <TextInput
                      id="task_image_path"
                      type="file"
                      name="image"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("image", e.target.files[0])}
                    />
                    <InputError message={errors.image} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel forInput="task_name" value="Task Name" />
                    <TextInput
                      id="task_name"
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
                      forInput="task_description"
                      value="Task Description"
                    />
                    <TextAreaInput
                      id="task_description"
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
                      forInput="task_due_date"
                      value="Task Deadline"
                    />
                    <TextInput
                      id="task_due_date"
                      type="date"
                      name="due_date"
                      value={data.due_date}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("due_date", e.target.value)}
                    />
                    <InputError message={errors.due_date} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel forInput="task_status" value="Task Status" />
                    <SelectInput
                      id="task_status"
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
                  <div className="mt-4">
                    <InputLabel
                      forInput="task_priority"
                      value="Task Priority"
                    />
                    <SelectInput
                      id="task_priority"
                      name="priority"
                      value={data.priority}
                      className="mt-1 block w-full"
                      onChange={(e) => setData("priority", e.target.value)}
                    >
                      <option value="">Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </SelectInput>
                    <InputError message={errors.priority} className="mt-2" />
                  </div>
                  <div className="mt-4">
                    <InputLabel
                      forInput="task_assigned_user"
                      value="Assigned User"
                    />
                    <SelectInput
                      name="assigned_user_id"
                      id="task_assigned_user"
                      value={data.assigned_user_id}
                      className="mt-1 block w-full"
                      onChange={(e) =>
                        setData("assigned_user_id", e.target.value)
                      }
                    >
                      <option value="">Select User</option>
                      {users.data.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </SelectInput>
                    <InputError
                      message={errors.assigned_user_id}
                      className="mt-2"
                    />
                  </div>
                  <div className="mt-4  flex justify-end">
                    <Link
                      href={route("task.index")}
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
