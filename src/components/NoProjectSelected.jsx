import Button from "./Button";
import logo from "../assets/no-projects.png";

export default function NoProjectSelected({ onClick }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 object-contain mx-auto" src={logo}></img>
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onClick}>Create new project</Button>
    </div>
  );
}
