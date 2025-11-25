// components/Bio.js

function Bio(){
    const bio = `I’m an aspiring self-learning software developer from Delhi, India. Completed schooling in Science (Computer Science + C++ + SQL), graduated in 2020.\n
Took a 5-year break from formal studies, kept learning Mathematics and Physics on my own.
Briefly attended college (dropped out in 3rd year).
Restarted coding in 2024 after discovering small programming tasks on crowdsourcing platforms.
First exposure came through C++ projects, which inspired me to explore Computer Science, Web, Networks, and AI.
Now, I’m committed to learning, building projects, and documenting my journey here.`

    const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Python'];

    return(
        <div className="bio">
            <h2 className="bio-heading">About Me</h2>
            <p className="bio-text">{bio}</p>
            <h2 className="skills">Skills</h2>
            <div className="skill-container">
                {
                skills.map((skill, index) =>{
                    return(<span key={index} className="skill">{skill}</span>);
                })
            }
            </div>
            
        </div>
    );
};

export default Bio;