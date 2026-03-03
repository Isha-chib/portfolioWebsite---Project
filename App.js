

import React from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
 /* { label: 'Experience', href: '#experience' },*/
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  /*{ label : <image src="isha." alt="photo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }} />}*/
];


const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/isha-chib', icon: '🔗' },
  { label: 'GitHub', href: 'https://github.com/isha-chib', icon: '🐙' },
  { label: 'Email', href: 'mailto:isha@email.com', icon: '✉️' },
];

const experiences = [
  {
    company: 'Indira college of commerce and science',
    role: 'Web Development Intern',
    duration: 'Jun 2025 - Aug 2025',
    location: 'Remote',
    description: 'Worked on building responsive websites and learned modern web technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  
];

const projects = [
  {
    title: 'To-Do List',
    description: 'A simple React to-do list app to manage daily tasks. Add, edit, and delete tasks easily. (Local project, not online)',
    tech: ['React', 'JavaScript', 'CSS'],
    link: '',
    image: '',
  },
  /*{
    title: 'Certifier Dapp',
    description: 'Blockchain Web3/Ethereum Dapp',
    tech: ['Truffle', 'Solidity', 'React'],
    link: 'https://github.com/aachal01/certifier-dapp',
    image: 'https://miro.medium.com/max/1400/0*M-p2nZwJZYzwnDBc.png',
  },
  {
    title: 'FilePad',
    description: 'File Explorer & Editor Web Frontend',
    tech: ['TypeScript', 'React'],
    link: 'https://jhasuraj.com/filepad/',
    image: '',
  },
  {
    title: 'Medistore',
    description: 'Inventory Full Stack / GCP / DBMS',
    tech: ['GraphQL', 'Firestore', 'React'],
    link: 'https://medistore.jhasuraj.com/',
    image: '',
  },*/
];

const skills = {
  Programming: ['C', 'C++', 'TypeScript', 'Python', 'Java'],
  Frontend: ['HTML5', 'CSS', 'React', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'Spring Boot', 'jQuery'],
  Databases: ['MySQL', 'PostgreSQL'],
  core: ['Data Structures and Algorithms', 'DBMS'],
};

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', background: '#0c2c3b', minHeight: '150vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 3rem', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <span style={{ fontWeight: 700, fontSize: '1.5rem', color: '#0c2c3b' }}>Isha Chib</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{ color: '#0097a7', textDecoration: 'none', fontWeight: 500 }}>{link.label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.3rem' }}>{link.icon}</a>
          ))}
        </div>
      </nav>
      <section id="home" style={{ textAlign: 'center', padding: '3rem 1rem 2rem 1rem', background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)' }}>
        <h1 style={{ fontSize: '2.7rem', color: '#0c2c3b', marginBottom: '0.5rem' }}>Hi, I'm Isha Chib</h1>
        <p style={{ fontSize: '1.2rem', color: '#140101', marginBottom: '1.5rem' }}>
          Aspiring Software Engineer with a strong foundation in development, eager to leverage my skills in coding and innovative problem-solving to contribute to the digital evolution in the tech industry.
        </p>
        <p style={{ maxWidth: 600, margin: '0 auto', color: '#444' }}>
          Currently pursuing Bachelor of Computer Applications (BCA) at Indira College of Commerce and Science, Pune. I am passionate about web development, learning new technologies, and building creative projects. Looking for internship opportunities to apply my skills and grow in the tech industry.
        </p>
      </section>
      {/* Experience section removed for fresher profile */}
      <section id="projects" style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem' }}>
        <h2 style={{ color: '#0097a7', marginBottom: '1.5rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#f9f9f9', borderRadius: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.04)', padding: '1rem', textAlign: 'left' }}>
            <h3 style={{ color: '#0097a7', marginBottom: '0.5rem' }}>To-Do List <span style={{ fontSize: '1rem', color: '#666' }}>| Front-end Development</span></h3>
            <div style={{ color: '#444', marginBottom: '0.5rem' }}>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                <li>Developed an interactive, user-friendly web-based To-Do List using HTML, CSS, and JavaScript, enabling users to add and delete tasks seamlessly.</li>
                <li>Included features for adding, deleting tasks.</li>
                <li>Organized code using modular JavaScript functions and semantic HTML to improve maintainability and scalability.</li>
                <li>Tested functionality across multiple browsers to ensure cross-browser compatibility and consistent behavior.</li>
              </ul>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#00bcd4', marginBottom: '0.5rem' }}>Tech: HTML, CSS, JavaScript, React</div>
          </div>
          {/* ...existing code for other projects... */}
        </div>
      </section>
      <section id="skills" style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem' }}>
        <h2 style={{ color: '#0097a7', marginBottom: '1.5rem' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Programming Languages</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>C, C++, Java, JavaScript</div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Frontend</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>HTML5, CSS, React, Bootstrap</div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Backend</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>Node.js, Express.js, FastAPI, Spring Boot, jQuery</div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Databases</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>MySQL, PostgreSQL</div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Core</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>Data Structures and Algorithms, DBMS</div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1rem' }}>
            <h4 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>Other Skills</h4>
            <div style={{ color: '#222', fontWeight: 500 }}>Communication</div>
          </div>
        </div>
      </section>
      <section id="contact" style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#0097a7', marginBottom: '1.5rem' }}>Achievements & Coding Profiles</h2>
        <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Achievements</div>
        <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 1.5rem auto', color: '#222' }}>
          <li><b>Problems Solved:</b> Total 60+ questions solved.</li>
          <li><b>Presentation Medalist:</b> Recognized for excellence in a college-level presentation competition.</li>
          <li><b>Sports Achievements:</b> Secured medals and certificates in school-level sports events, reflecting teamwork, dedication, and competitive spirit.</li>
        </ul>
        <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Coding Platform Profiles</div>
        <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 1.5rem auto', color: '#222' }}>
          <li><b>Hackerrank:</b> Hackerrank/Isha</li>
          <li><b>LeetCode:</b> LeetCode/Isha</li>
          <li><b>CodeChef:</b> CodeChef/Isha</li>
          <li><b>CodeForces:</b> CodeForces/Isha</li>
        </ul>
        <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Contact</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#0097a7', textDecoration: 'none' }}>{link.icon} {link.label}</a>
          ))}
        </div>
        <div>Email: <a href="mailto:isha@email.com" style={{ color: '#0097a7', textDecoration: 'underline' }}>isha@email.com</a></div>
      </section>
    </div>
  );
}

export default App;
