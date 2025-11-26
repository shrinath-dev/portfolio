import './ProjectCard.css';

function ProjectCard({thumbnail, heading, techStack, description, demoLink, githubLink}){

    
    return(
        <div className='project-card'>
            <img src={thumbnail} alt={heading} />
            <div className="heading">
                <h2>{heading}</h2>
                <div className="techstack-container">
                    {
                    techStack.map((item, index) =>{
                        return(
                            <span key={index} className="techstack-item">{item}</span>
                        )
                    })
                }
                </div> 
            </div>
            <p className="project-desc">{description}</p>
            <div className="links">
                <div className="demo-link">
                    <a target='_blank' rel='noreferrer'  href={demoLink} >
                        <p>Live Demo</p>
                        <img src="/link.svg" alt="demo" />
                    </a>
                </div>
                <div className="github-link">
                    <a target='_blank' rel='noreferrer' href={githubLink} >
                        <p>Code</p>
                        <img src="/github.svg" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard;