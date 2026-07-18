import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoprojectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjecstState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleSelectProject(id) {
    setProjecstState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleStartAddProject() {
    setProjecstState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjecstState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    setProjecstState(prevState => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content= <SelectedProject project={selectedProject}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects} 
      onSelectProject={handleSelectProject}
      />
      {content}

    </main>
  );
}

export default App;
