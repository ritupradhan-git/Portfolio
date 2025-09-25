import React, { useState } from 'react'
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const MyWork = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { name: "Website", img: card1 },
    { name: "UI/UX", img: card2 },
    { name: "IoT", img: card3 }
  ];
  const filteredProjects = selectedCategory
    ? mywork_data.filter(p => p.category === selectedCategory)
    : [];

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My <span>Projects</span></h1>
      </div>
      <div className="mywork-container">
        {categories.map((cat, index) => {
          return (<div key={index} className={`category-card ${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} ${selectedCategory === cat.name ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${cat.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onClick={() => setSelectedCategory(cat.name)}><div className="category-name">{cat.name}</div>
          </div>
          );
        })}
      </div>
      {/* Projects Grid */}
      <div className="mywork-container">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.images[0]} alt={project.title} />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FontAwesomeIcon icon={faArrowRight} className="showmore-icon" />
      </div>
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon
              icon={faTimes}
              className="modal-close-icon"
              onClick={() => setSelectedProject(null)}
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-images">
              {selectedProject.images.map((img, idx) => (
                <img key={idx} src={img} alt="" />
              ))}
            </div>
            {selectedProject.github && <a href={selectedProject.github} target="_blank">GitHub</a>}
            {selectedProject.live && <a href={selectedProject.live} target="_blank">Live Demo</a>}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyWork
