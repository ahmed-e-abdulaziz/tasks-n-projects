import { useState } from "react";
import Input from "./Input";

export default function AddProject({ addProject }) {
  const [project, setProject] = useState({});
  function handleCancel() {
    setProject((_) => {});
  }

  function handleInputChange(inputId, event) {
    setProject((project) => {
      project[inputId] = event.target.value;
      return project;
    });
  }
  return (
    <section className="m-24">
      <aside className="flex flex-row justify-end">
        <button
          onClick={() => handleCancel()}
          className="text-stone-800 mx-1 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={() => addProject(project)}
          className="px-4 py-2 mx-1 text-xs md:text-base rounded-md bg-stone-900 text-stone-400 hover:bg-stone-700 hover:text-stone-100"
        >
          Save
        </button>
      </aside>
      <form className="mt-4">
        <Input
          onChange={(event) => handleInputChange("title", event)}
          id="title"
          label="Title"
          type="text"
        />
        <Input
          onChange={(event) => handleInputChange("description", event)}
          id="description"
          label="Description"
          type="textarea"
        />
        <Input
          onChange={(event) => handleInputChange("date", event)}
          id="duedate"
          label="Due Date"
          type="date"
        />
      </form>
    </section>
  );
}
