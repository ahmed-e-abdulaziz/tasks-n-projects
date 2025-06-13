export default function ProjectsList({ projects, selectProject }) {
  const list = projects.map((project) => {
    return (
      <li key={project.title}>
        <button onClick={() => selectProject(project)}>{project.title}</button>
      </li>
    );
  });
  return <>{list}</>;
}
