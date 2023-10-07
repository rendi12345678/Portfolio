import React from 'react';
import '../styles/reset.css';
import '../styles/project.css';
import weatherImage from '../img/wheater-app.jpg';
import movieImage from '../img/movie.jpg';
import todoImage from '../img/todo.jpg';

const Project = () => {
return (
   <section class="project-section">
     <h1>My Projects</h1>
     <div class="project-list">
       <figure class="project">
       <img src={weatherImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure class="project">
       <img src={movieImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
       <figure class="project">
       <img src={todoImage} 
            alt="Project Image"
            title="Project Image"/>    
       </figure>
    </div>
    <button class="show-all-btn">Show All</button>
   </section>
);
}

export default Project;