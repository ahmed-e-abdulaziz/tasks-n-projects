import { useState } from "react";

export default function Project({ project, addTask, deleteTask }) {
  const [newTask, setNewTask] = useState();

  const formattedDate = new Date(project.duedate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="w-2/3">
      <strong className="text-stone-900 text-4xl">{project.title}</strong>
      <p className="text-stone-600">{formattedDate}</p>
      <p className="text-stone-900 whitespace-pre-wrap">
        {project.description}
      </p>
      <hr className="w-full"></hr>
      <strong className="text-stone-900 text-4xl">Tasks</strong>
      <br></br>
      <input
        onChange={(event) => setNewTask(event.target.value)}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      ></input>
      <button
        onClick={() => {
          setNewTask("");
          addTask(project.id, newTask);
        }}
        className="px-4"
      >
        Add Task
      </button>
      <ul className="mt-8">
        {project.tasks?.length > 0 &&
          project.tasks.map((task) => (
            <li className="m-4 p-4">
              <span>{task}</span>
              <button onClick={() => deleteTask(task)} className="float-end">
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
