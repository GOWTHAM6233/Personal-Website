import { Link } from "react-router-dom";

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "To-Do List Application",
      description: "Built a desktop To-Do List app using Java and JavaFX. Integrated PostgreSQL database for persistent task storage. Features include task reminders, sorting, drag-and-drop, and enhanced UI/UX.",
      techStack: ["Java", "JavaFX", "PostgreSQL", "OOP"],
      duration: "2 months",
      role: "Full-Stack Developer",
      image: "/todo-app.jpg",
      placeholder: "📋",
      repoUrl: "https://github.com/GOWTHAM6233/To-Do-List"
    },
    {
      id: 2,
      title: "Temperature Calculation & Weather Forecasting",
      description: "Developed a web-based temperature calculator with real-time weather data. Used JavaScript to fetch and display live weather info. Designed an intuitive and responsive user interface.",
      techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
      duration: "1 month",
      role: "Frontend Developer",
      image: "/weather-app.jpg",
      placeholder: "🌤️",
      repoUrl: "https://github.com/GOWTHAM6233/Temperature-Converter"
    },
    {
      id: 3,
      title: "Human Violence Detection",
      description: "Created a violence detection system using YOLOv8 & Inception-v3. Trained models on surveillance datasets for real-time detection. FastAPI backend for video analysis in security and monitoring.",
      techStack: ["YOLOv8", "Inception-v3", "FastAPI", "Python", "AI/ML"],
      duration: "3 months",
      role: "AI/ML Developer",
      image: "/violence-detection.jpg",
      placeholder: "🔒"
    }
  ];

  return (
    <section>
      <h2>Featured Projects</h2>
      <p>Here are some of my recent projects that demonstrate my skills in full-stack development, AI/ML, and problem-solving.</p>
      
      <div className="projects-grid" style={{ marginTop: "20px" }}>
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} />
              ) : null}
              <div className="project-placeholder" style={{ display: project.image ? 'none' : 'flex' }}>
                <span style={{ fontSize: '48px' }}>{project.placeholder}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <span className="project-role">{project.role}</span>
                <span className="project-duration">{project.duration}</span>
              </div>
              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link className="btn" to={`/projects/${project.id}`}>
                  View Details
                </Link>
                {project.repoUrl && (
                  <a className="btn ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects" style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>Want to see more?</h3>
        <p>Check out my GitHub profile for additional projects and contributions.</p>
        <a href="https://github.com/GOWTHAM6233" className="btn ghost" target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Projects;
