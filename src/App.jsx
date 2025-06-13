import { useState } from "react";
import AddProject from "./components/AddProject";
import Button from "./components/Button";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsList from "./components/ProjectsList";
import Project from "./components/Project";

function App() {
  const [addProject, setAddProject] = useState(false);
  function toggleCreateNewProject() {
    setAddProject(true);
  }

  const [projects, setProjects] = useState([]);
  function handleAddProject(project) {
    setProjects((projects) => {
      handleSelectProject(project);
      return [...projects, project];
    });
  }

  const [selectedProject, setSelectedProject] = useState();
  function handleSelectProject(project) {
    setAddProject(false);
    setSelectedProject(project);
    console.log(project);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
        <ul>
          <li className="my-4">
            <strong className="text-xl uppercase text-stone-100">
              Your Projects
            </strong>
          </li>
          <li>
            <Button onClick={toggleCreateNewProject}>+ Add Project</Button>
          </li>
          {projects.length > 0 && (
            <ProjectsList
              projects={projects}
              selectProject={handleSelectProject}
            />
          )}
        </ul>
      </aside>
      {projects.length === 0 && !addProject && (
        <NoProjectSelected onClick={toggleCreateNewProject} />
      )}
      {addProject && (
        <AddProject addProject={(project) => handleAddProject(project)} />
      )}
      {!!selectedProject && (
        <Project
          project={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </main>
  );
}

export default App;
