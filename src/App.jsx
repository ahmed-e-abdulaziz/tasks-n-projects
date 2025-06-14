import { useState } from "react";
import AddProject from "./components/AddProject";
import Button from "./components/Button";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsList from "./components/ProjectsList";
import Project from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function addTask(projectId, task) {
    setProjectState((prevState) => {
      let p = prevState.projects.find((p) => (p.id = projectId));
      if (!p.tasks) {
        p.tasks = [];
      }
      p.tasks = [...p.tasks, task];
      return { ...prevState };
    });
  }

  function deleteTask(task) {
    setProjectState((project) => {
      project.tasks = project.tasks.filter((t) => t === task);
    });
  }

  function toggleCreateNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(project) {
    setProjectState((prevState) => {
      project.id = Math.random();

      return {
        ...prevState,
        selectedProjectId: project.id,
        projects: [...prevState.projects, project],
      };
    });
  }

  function cancelAdd() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    });
  }

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={toggleCreateNewProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <AddProject addProject={handleAddProject} onCancel={cancelAdd} />;
  } else {
    content = (
      <Project
        project={projectState.projects.find(
          (p) => (p.id = projectState.selectedProjectId)
        )}
        addTask={addTask}
        deleteTask={deleteTask}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
        <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={toggleCreateNewProject}>+ Add Project</Button>
        </div>
        <ul>
          {projectState.projects.length > 0 && (
            <ProjectsList
              projects={projectState.projects}
              selectProject={handleSelectProject}
            />
          )}
        </ul>
      </aside>
      {content}
    </main>
  );
}

export default App;
