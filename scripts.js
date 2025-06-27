// scripts.js
window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});

AOS.init({ duration: 800, once: true });

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function showSection(id) {
  document.querySelectorAll(".card").forEach((section) => {
    section.classList.add("hidden-section");
  });
  document.getElementById(id).classList.remove("hidden-section");
}

// Default view
window.onload = () => {
  showSection("about");
  loadContent();
};

function loadContent() {
  document.getElementById("about").innerHTML = `
    <h2>About</h2>
    <p>Hi! I'm Athul A Joe, a full-stack Python developer based in Kerala, India. I'm passionate about crafting powerful backend solutions and intuitive frontend experiences using Django, Angular, and PostgreSQL.</p>
    <p>I specialize in building RESTful APIs, collaborating across teams, and delivering scalable, maintainable systems. With a strong academic background in computer applications, I’m always seeking to expand my knowledge and grow in the tech industry.</p>
    <p>I’ve led backend development for enterprise-grade software at Travidux Technologies, implemented agile workflows, and mentored junior developers to build high-performance products.</p>
    <ul>
      <li><strong>🧠 Strengths:</strong> API Development, Agile Collaboration, Debugging</li>
      <li><strong>📈 Values:</strong> Clean Code, Continuous Learning, Cross-functional Teamwork</li>
      <li><strong>🎯 Vision:</strong> Becoming a highly adaptive, full-stack engineer delivering global-scale apps</li>
    </ul>
  `;

  document.getElementById("resume").innerHTML = `
    <h2>Resume</h2>
    <div class="sub-card">
      <h3>Professional Experience</h3>
      <h4>Software Developer – Travidux Technologies Pvt. Ltd.</h4>
      <p><em>Apr 2022 – Jul 2023 | Kerala, India</em></p>
      <ul>
        <li>Developed and maintained scalable applications using Django and Angular.</li>
        <li>Built REST APIs with secure user authentication and integrated frontend features.</li>
        <li>Worked with PostgreSQL, optimized queries, and implemented reporting features.</li>
        <li>Led client demos, maintained documentation, and participated in sprint planning.</li>
      </ul>
    </div>

    <div class="sub-card">
      <h3>Education</h3>
      <p><strong>MCA</strong> – Christ Academy Institute for Advanced Studies, Bangalore (7.2 CGPA)</p>
      <p><strong>BCA</strong> – Nirmala College, Muvattupuzha (6.0 CGPA)</p>
    </div>

    <div class="sub-card">
      <h3>Technical Skills</h3>
      <p><strong>Languages:</strong> Python, TypeScript</p>
      <p><strong>Frontend:</strong> HTML, CSS, Angular, Bootstrap</p>
      <p><strong>Backend:</strong> Django</p>
      <p><strong>Databases:</strong> PostgreSQL, MySQL</p>
      <p><strong>Other Tools:</strong> Git, Agile, UI/UX, Debugging</p>
    </div>

    <div class="sub-card">
      <h3>Certifications</h3>
      <ul>
        <li>Python Full Stack Developer – Quest Innovative Solutions</li>
        <li>Analytics (Excel, Tableau, ChatGPT) – Prinston Smart Engineers</li>
      </ul>
    </div>
  `;

  document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    <div class="project">
      <h3>Point of Sale (POS)</h3>
      <p>Backend logic and stock accounting solution developed during Travidux tenure. Reduced error rates and improved sales processing.</p>
    </div>
    <div class="project">
      <h3>Enquiry Track</h3>
      <p>Mobile-friendly app to track client inquiries, integrated with Django REST and Angular UI components.</p>
    </div>
    <div class="project">
      <h3>Business Intelligence Platform</h3>
      <p>Created dashboards and queries to empower real-time decision-making using PostgreSQL + Python data workflows.</p>
    </div>
    <div class="project">
      <h3>Reward Canvas</h3>
      <p>Content-sharing platform with creator monetization features. Built with a Django backend and launched for beta testing in 2025.</p>
    </div>
  `;
}
// Toggle dark mode on click
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});

