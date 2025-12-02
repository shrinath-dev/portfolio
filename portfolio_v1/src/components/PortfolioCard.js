import './PortfolioCard.css';

import Header from './Header';
import Avatar from './Avatar';
import PersonalInfo from './PersonalInfo';
import Bio from './Bio';
import ProjectCard from './ProjectCard';


const projectData = [
  {
    thumbnail: './weather-app.png',
    heading: "Weather App",
    techStack: ['HTML', 'CSS', 'Javascript'],
    description: "This weather app is a demo project which i made to practice my html, css, js knowledge practically. This app detect user's current location and give weather forecast of the day.",
    demoLink: "https://sd-weather-demo-app.netlify.app/",
    githubLink: "https://github.com/shrinath-dev/Sample-projects/tree/main/restaurant_website"
  },
  {
    thumbnail: './restaurant-app.png',
    heading: "Restaurant App",
    techStack: ['HTML', 'CSS', 'Javascript'],
    description: "This restaurant app is a demo project whic i made to pracitce my skills of html, css, javascript, it is modern and responsive.",
    demoLink: "https://joyful-kulfi-192502.netlify.app/",
    githubLink: "https://github.com/shrinath-dev/Sample-projects/tree/main/weather_app"
  },
  {
    thumbnail: './movie-explorer.png',
    heading: "Movie Explorer",
    techStack: ['React', 'CSS', 'Javascript'],
    description: "A component driven React app showcasing search, filtering, theming, and favourites logic. Built entirely with static JSON data for pure UI and state-management practice.",
    demoLink: "https://sd-movies-explorer.netlify.app/",
    githubLink: "https://github.com/shrinath-dev/Sample-projects/tree/main/movies-explorer"
  }
]

function PortfolioCard(){
    return(
        <div className='portfolio-card'>
            <Header />
            <div className="card-content">
                <Avatar />
                <PersonalInfo />
                <Bio />
                
                <div className="feature-projects-list">
                    <h2 className='featured-projects'>Featured Projects</h2>
                    {
                        projectData.map((item, index) =>{
                            return(
                                <ProjectCard {...item} />
                            )
                        })
                    }
                </div>
                {/* <ProjectCard {...projectData[0]}/> */}
            </div>
            
            
            
        </div>
    );
};

export default PortfolioCard;
