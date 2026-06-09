function ProjectCard({ image, title, description, tags, githubUrl, demoUrl }) {
    return (
        <div className="project-card">
            <div className="top">
                <img src={image} alt={title} />
            </div>
            <div className="bottom">
                <div className="about">
                    <h5 className="title">{title}</h5>
                    <p className="abt-project">{description}</p>
                    <div className="tags">
                        {tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="links">
                    <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={demoUrl} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
