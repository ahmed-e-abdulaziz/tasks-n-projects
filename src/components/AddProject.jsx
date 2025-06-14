import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ addProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();
  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      duedate.current.value.trim() === ""
    ) {
      modal.current.open();
    } else {
      addProject({
        title: title.current.value,
        description: description.current.value,
        duedate: duedate.current.value,
      });
    }
  }
  return (
    <>
      <Modal ref={modal} closeButtonText="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops, looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure to provide valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 mx-1 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSave()}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="mt-4">
          <Input ref={title} id="title" label="Title" type="text" />
          <Input
            ref={description}
            id="description"
            label="Description"
            type="textarea"
          />
          <Input ref={duedate} id="duedate" label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
