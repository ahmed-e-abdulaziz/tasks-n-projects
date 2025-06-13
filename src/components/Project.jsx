import { useState } from "react";

export default function Project({ project, setSelectedProject }) {
  const [newTask, setNewTask] = useState();
  function addTask(task) {
    setSelectedProject((p) => {
      if (!p.tasks) {
        p.tasks = [];
      }
      p.tasks = [...p.tasks, task];
      return p;
    });
  }
  function deleteTask(task) {
    setSelectedProject((project) => {
      project.tasks = project.tasks.filter((t) => t === task);
    });
  }
  return (
    <section className="w-2/3">
      <strong className="text-stone-900 text-4xl">{project.title}</strong>
      <p className="text-stone-600">{project.date}</p>
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
      <button onClick={() => addTask(newTask)} className="px-4">
        Add Task
      </button>
      <ul className="bg-stone-100 w-full">
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
