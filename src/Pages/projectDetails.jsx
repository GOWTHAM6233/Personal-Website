import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  // Project details data
  const projectDetails = {
    1: {
      title: "To-Do List Application",
      repoUrl: "https://github.com/GOWTHAM6233/To-Do-List",
      overview: "A comprehensive desktop To-Do List application built with Java and JavaFX, featuring a modern user interface and robust database integration. The application provides users with an intuitive way to manage their daily tasks with advanced features like reminders, sorting, and drag-and-drop functionality.",
      techStack: ["Java", "JavaFX", "PostgreSQL", "OOP", "CRUD Operations"],
      features: [
        "Task creation, editing, and deletion",
        "PostgreSQL database for persistent storage",
        "Task reminders and notifications",
        "Drag-and-drop task reordering",
        "Advanced sorting and filtering",
        "Enhanced UI/UX with modern design"
      ],
      challenges: "Implementing real-time database synchronization and creating an intuitive drag-and-drop interface for task management.",
      solutions: "Used JavaFX's built-in drag-and-drop API and implemented efficient database connection pooling for better performance.",
      duration: "2 months",
      role: "Full-Stack Developer"
    },
    2: {
      title: "Temperature Calculation & Weather Forecasting",
      repoUrl: "https://github.com/GOWTHAM6233/Temperature-Converter",
      overview: "A responsive web application that combines temperature conversion utilities with real-time weather data. Users can convert between different temperature scales and get current weather information for any location, all through an intuitive and mobile-friendly interface.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Weather API", "Responsive Design"],
      features: [
        "Temperature conversion (Celsius, Fahrenheit, Kelvin)",
        "Real-time weather data integration",
        "Location-based weather forecasting",
        "Responsive design for all devices",
        "Clean and intuitive user interface",
        "Fast and efficient calculations"
      ],
      challenges: "Integrating external weather APIs and ensuring responsive design across different screen sizes.",
      solutions: "Used modern CSS Grid and Flexbox for responsive design, and implemented proper error handling for API calls.",
      duration: "1 month",
      role: "Frontend Developer"
    },
    3: {
      title: "Human Violence Detection",
      overview: "An advanced AI-powered system for detecting violent behavior in surveillance footage using computer vision and deep learning. The system can analyze video streams in real-time and alert security personnel when violent activities are detected, making it valuable for security and monitoring applications.",
      techStack: ["YOLOv8", "Inception-v3", "FastAPI", "Python", "OpenCV", "AI/ML", "Computer Vision"],
      features: [
        "Real-time video analysis",
        "Violence detection using YOLOv8",
        "Inception-v3 for behavior classification",
        "FastAPI backend for high performance",
        "Surveillance dataset training",
        "Alert system for security personnel"
      ],
      challenges: "Training models on limited surveillance datasets and achieving real-time performance for video analysis.",
      solutions: "Used transfer learning with pre-trained models and implemented efficient video processing pipelines with FastAPI.",
      duration: "3 months",
      role: "AI/ML Developer"
    }
  };

  const project = projectDetails[id];

  if (!project) {
    return (
      <section>
        <h2>Project Not Found</h2>
        <p>The requested project could not be found.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>{project.title}</h2>
      
      <div className="project-details-grid" style={{ marginTop: "20px" }}>
        <div className="card">
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>
        
        <div className="card">
          <h3>Tech Stack</h3>
          <div className="tech-stack-list">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="card">
          <h3>Project Details</h3>
          <div className="project-meta">
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Role:</strong> {project.role}</p>
          </div>
        </div>
        
        <div className="card">
          <h3>Challenges & Solutions</h3>
          <div className="challenges-section">
            <h4>Challenges:</h4>
            <p>{project.challenges}</p>
            <h4>Solutions:</h4>
            <p>{project.solutions}</p>
          </div>
        </div>
        
        <div className="card">
          <h3>Links</h3>
          <div className="project-links">
            {project.repoUrl ? (
              <a href={project.repoUrl} className="btn ghost" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            ) : (
              <a href="https://github.com/GOWTHAM6233" className="btn ghost" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            )}
            <Link to="/projects" className="btn ghost">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
