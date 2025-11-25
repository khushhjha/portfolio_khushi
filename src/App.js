import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [contributions, setContributions] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [views, setViews] = useState(0);
  
  const titles = ['Full-Stack Developer', 'React Specialist', 'Next.js Expert', 'Open Source Contributor'];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        if (typedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex, titles]);

  // Animated counters
  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };
    
    setTimeout(() => animateCounter(setContributions, 27, 2000), 500);
    setTimeout(() => animateCounter(setFollowers, 10, 2000), 700);
    setTimeout(() => animateCounter(setViews, 166, 2000), 900);
  }, []);

  return (
    <div className="App">
      <div className="time">{currentTime.toLocaleTimeString()}</div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>
      <div className="shooting-stars">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`shooting-star shooting-star-${i}`}></div>
        ))}
      </div>
      <div className="robot-left">🚀</div>
      
      <header className="profile-header">
        <div className="container">
          <div className="profile-picture">
            <div className="profile-img" onClick={() => document.getElementById('photo-upload').click()}>
              {imagePreview ? (
                <img src={imagePreview} alt="Profile" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
              ) : (
                "KJ"
              )}
            </div>
            <input 
              id="photo-upload"
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              style={{display: 'none'}}
            />
          </div>
          <h1>Khushi Jha</h1>
          <p className="location">Ghaziabad, UP, India</p>
          <button className="schedule-btn">Schedule a call</button>
          
          <div className="hero-section">
            <h2>Khushi Jha</h2>
            <p className="title">{typedText}<span className="cursor">|</span></p>
            <p className="bio">Full-Stack Developer from India studying at RKGITM, specializing in modern web technologies and open-source development. Passionate about building scalable applications with Next.js and contributing to the developer community through open-source projects.</p>
          </div>
        </div>
      </header>

      <section className="tech-arsenal">
        <div className="container">
          <h3>Tech Arsenal</h3>
          <div className="tech-grid">
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
              JavaScript
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-icon" />
              TypeScript
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" className="tech-icon" />
              Tailwind
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SCSS" className="tech-icon" />
              SCSS
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="Framer" className="tech-icon" />
              Framer
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="tech-icon" />
              React
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" className="tech-icon" />
              Redux
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js" className="tech-icon" />
              Next.js
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon" />
              Node.js
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="tech-icon" />
              Express
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-icon" />
              MongoDB
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" alt="Supabase" className="tech-icon" />
              Supabase
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/sanity/sanity-icon.svg" alt="Sanity" className="tech-icon" />
              Sanity
            </span>
            <span className="tech">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="tech-icon" />
              Docker
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" className="tech-icon" />
              Vercel
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="tech-icon" />
              Git
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="tech-icon" />
              Postman
            </span>
            <span className="tech">
              <img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="Cloudflare" className="tech-icon" />
              Cloudflare
            </span>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h3>Featured Projects</h3>
          
          <div className="project">
            <h4>Web Development Quiz</h4>
            <p>A responsive, interactive quiz application to test web development knowledge across three difficulty levels. Features 15 questions, progress tracking, professional styling with Tailwind CSS, and instant results with user registration.</p>
            <div className="project-links">
              <a href="https://quiz-one-orcin.vercel.app/" className="btn">Live Demo</a>
              <a href="https://github.com/khushhjha/QUIZ.git" className="btn-secondary">GitHub</a>
            </div>
          </div>

          <div className="project">
            <h4>React Job Search Application</h4>
            <p>A modern React.js application for searching jobs by keyword and location with interactive styling. Features real-time search results, mobile-friendly interface, API integration, and modern CSS animations with responsive design.</p>
            <div className="project-links">
              <a href="https://finding-job-gamma.vercel.app/" className="btn">Live Demo</a>
              <a href="https://github.com/khushhjha/FindingJob.git" className="btn-secondary">GitHub</a>
            </div>
          </div>

          <div className="project">
            <h4>School Management System</h4>
            <p>A Next.js application for managing school data with MySQL database. Features form validation, responsive grid layout, image upload functionality, and complete CRUD operations with React Hook Form integration.</p>
            <div className="project-links">
              <a href="https://school-management-orcin-five.vercel.app/" className="btn">Live Demo</a>
              <a href="https://github.com/khushhjha/SchoolManagement.git" className="btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h3>Achievements & Badges</h3>
          <div className="badges">
            <span className="badge">Full Stack + DevOps</span>
            <span className="badge">JavaScript (HackerRank)</span>
            <span className="badge">React (HackerRank)</span>
            <span className="badge">JavaScript (Udemy)</span>
          </div>
        </div>
      </section>

      <section className="github-stats">
        <div className="container">
          <h3>GitHub Contributions</h3>
          <div className="stats-grid">
            <div className="stat" data-aos="fade-up">
              <span className="number">{contributions}</span>
              <span className="label">contributions in the last year</span>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="100">
              <span className="number">{followers}</span>
              <span className="label">Followers</span>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="200">
              <span className="number">10</span>
              <span className="label">Following</span>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="300">
              <span className="number pulse-heart">❤️ 200</span>
              <span className="label">Love Count</span>
            </div>
            <div className="stat" data-aos="fade-up" data-aos-delay="400">
              <span className="number">{views}</span>
              <span className="label">Views</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h3>Let's Build Something Amazing</h3>
          <p>Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality.</p>
          <a href="mailto:khushijha671@gmail.com" className="contact-email">khushijha671@gmail.com</a>
          <div className="social-links">
            <a href="http://www.linkedin.com/in/khushi-jha-1b7a68386" className="btn-secondary">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;