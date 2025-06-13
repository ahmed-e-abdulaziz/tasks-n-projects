import Button from "./Button";
import logo from "../assets/no-projects.png";

export default function NoProjectSelected({ onClick }) {
  return (
    <section className="mx-auto my-32 place-items-center">
      <img className="w-16" src={logo}></img>
      <strong className="text-xl font-bold text-stone-600 my-4">
        No Project Selected
      </strong>
      <p className="text-stone-600 my-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onClick}>Create new project</Button>
    </section>
  );
}
