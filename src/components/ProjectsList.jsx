export default function ProjectsList({ projects, selectProject }) {
  const list = projects.map((project) => {
    return (
      <li key={project.title}>
        <button
          className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
          onClick={() => selectProject(project.id)}
        >
          {project.title}
        </button>
      </li>
    );
  });
  return <>{list}</>;
}
