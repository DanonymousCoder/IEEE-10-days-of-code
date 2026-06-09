import ProjectsList from "../components/ProjectsList";

function Projects() {
    return (
        <div className="container">
            <div className="project-head">
                <h2>Technical Showcase</h2>
                <p>A curated selection of engineering projects focused on building scalable,
performant, and sophisticated architectures.</p>
            </div>
            <ProjectsList />
        </div>
    )
}

export default Projects;
