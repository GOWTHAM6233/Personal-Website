function About() {
  return (
    <section>
      <h2>About Me</h2>
      
      {/* Personal Introduction */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Who I Am</h3>
        <p>
          I'm a passionate Software Developer with strong skills in Java, JavaScript, and SQL, currently training in the MERN stack (MongoDB, Express.js, React, Node.js). I'm passionate about building clean, efficient, and user-friendly applications that solve real-world problems. My focus is on backend development, scalable logic, and integrating real-time data using REST APIs.
        </p>
      </div>

      {/* Education Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.E. Computer Science & Engineering</h4>
          <p className="institution">Mahendra Engineering College, Namakkal</p>
          <p className="duration">2021 – 2025</p>
          <p className="gpa">Percentage: 76.90%</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Work Experience</h3>
        <div className="experience-item">
          <h4>Trainee – MEAN Full Stack Developer</h4>
          <p className="company">Dr. Reddy's Foundation – GROW Tech Program</p>
          <p className="duration">June 2025 – Present</p>
          <ul className="achievements">
            <li>Intensive training in MongoDB, Express.js, Angular, Node.js</li>
            <li>Building production-ready full-stack apps with modular architecture</li>
            <li>Developing project features in Angular + TypeScript with team sprints</li>
            <li>Hands-on experience in backend integration & responsive UI design</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming</h4>
            <p>Java, JavaScript, TypeScript, React.js, Node.js</p>
          </div>
          <div className="skill-category">
            <h4>Web Technologies</h4>
            <p>HTML, CSS, Bootstrap, Spring Boot, PostgreSQL, MongoDB, OOP, CRUD Operations</p>
          </div>
          <div className="skill-category">
            <h4>Tools & IDEs</h4>
            <p>Git, GitHub, VS Code, Eclipse, NetBeans</p>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <p>Problem-solving, Clear Communication, Teamwork, Continuous Learning</p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Certifications</h3>
        <div className="certification-item">
          <h4>IoT – NPTEL</h4>
          <p className="issuer">National Programme on Technology Enhanced Learning</p>
          <p className="date">Top 25%, Score: 76%</p>
        </div>
        <div className="certification-item">
          <h4>Cloud Computing – NPTEL</h4>
          <p className="issuer">National Programme on Technology Enhanced Learning</p>
          <p className="date">Score: 71%</p>
        </div>
        <div className="certification-item">
          <h4>Java Full Stack Certification</h4>
          <p className="issuer">Wipro Tele Next</p>
          <p className="date">Completed</p>
        </div>
      </div>

      {/* Interests Section */}
      <div className="card">
        <h3>Interests & Focus Areas</h3>
        <p>Backend development, scalable logic, REST APIs, real-time data integration, 
           clean code architecture, user experience design, continuous learning and skill development</p>
      </div>
    </section>
  );
}

export default About;
