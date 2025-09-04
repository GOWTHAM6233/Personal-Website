function Home() {
  const handleDownloadResume = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      // Use the correct filename that exists in public folder
      link.href = '/Gowtham.Resume(full stack).pdf';
      link.download = 'Gowtham_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please make sure the resume file is available.');
    }
  };

  const handleViewResume = () => {
    try {
      // Open resume in a new tab - use the correct filename
      const resumeUrl = '/Gowtham.Resume(full stack).pdf';
      const newWindow = window.open(resumeUrl, '_blank');
      
      // Check if the window opened successfully
      if (!newWindow) {
        alert('Please allow pop-ups to view the resume.');
      }
    } catch (error) {
      console.error('View failed:', error);
      alert('Unable to open resume. Please check if the file exists.');
    }
  };

  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-badge">🚀 Aspiring Software Developer</div>
          <h1>
            Hi, I'm Gowtham 👋
          </h1>
          <p>
            A passionate Software Developer with strong skills in Java, JavaScript, and SQL, currently training in the MERN stack (MongoDB, Express.js, React, Node.js). I'm passionate about building clean, efficient, and user-friendly applications that solve real-world problems. My focus is on backend development, scalable logic, and integrating real-time data using REST APIs.
          </p>
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-number">4+</span>
              <span className="highlight-text">Years Education</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-text">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-text">Technologies</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <a href="/projects" className="btn">View Projects</a>
            <a href="/contact" className="btn ghost">Contact Me</a>
            <a href="/about" className="btn ghost">About Me</a>
          </div>
        </div>
        <div className="hero-image-section">
          <div className="profile-image">
            <img src="./src/assets/Gowtham.P.jpg" alt="Gowtham - Software Developer" />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="container">
          <h2>Resume</h2>
          <p>Download or view my detailed resume to learn more about my experience and skills.</p>
          
          <div className="resume-actions">
            <button onClick={handleViewResume} className="btn">
              📄 View Resume
            </button>
            <button onClick={handleDownloadResume} className="btn ghost">
              ⬇️ Download PDF
            </button>
          </div>

          <div className="resume-preview">
            <div className="resume-card">
              <h3>Quick Overview</h3>
              <div className="resume-highlights">
                <div className="resume-highlight">
                  <span className="highlight-icon">🎓</span>
                  <div>
                    <strong>Education</strong>
                    <p>Computer Science Student</p>
                  </div>
                </div>
                <div className="resume-highlight">
                  <span className="highlight-icon">💻</span>
                  <div>
                    <strong>Skills</strong>
                    <p>Java, JavaScript, SQL, MERN Stack</p>
                  </div>
                </div>
                <div className="resume-highlight">
                  <span className="highlight-icon">🚀</span>
                  <div>
                    <strong>Focus</strong>
                    <p>Backend Development & APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="resume-note" style={{ marginTop: "20px", padding: "16px", background: "rgba(124,92,255,0.1)", borderRadius: "12px", border: "1px solid rgba(124,92,255,0.2)" }}>
            <p style={{ margin: "0", fontSize: "14px", color: "var(--muted)" }}>
              <strong>Resume:</strong> Dive deeper into my experience, education, and projects in the PDF.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
