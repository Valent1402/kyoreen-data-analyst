const projects = [
  {
    title: "PUBG Mobile Player Performance Analysis",
    description: "Detailed player-level performance analysis using Python (pandas) and Excel to identify key metrics and improvement areas.",
    link: "#"
  },
  {
    title: "SQL Data Cleaning & Standardization",
    description: "SQL-driven ETL transformations and cleaning routines to standardize match logs and telemetry for downstream analysis.",
    link: "#"
  },
  {
    title: "Esports Tactical Data Review",
    description: "Tactical reviews using structured match data to produce counter-strategies and scrim plans for teams.",
    link: "#"
  },
  {
    title: "SVR Clover Stats Analyst",
    description: "Player- and tournament-level performance analysis: movement, reaction, decision time vs damage and kills. Includes correlation heatmap and per-player comparisons.",
    slug: "svr-clover-stats-analyst",
    thumb: "assets/projects/svr-clover-stats-analyst/images/svr_clover_heatmap.png",
    project_page: "projects/svr-clover-stats-analyst.html"
  }
];

function renderProjects(){
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'project';
    const link = p.project_page || p.link || '#';
    card.innerHTML = `
      <h4><a href="${link}" target="_blank" rel="noopener">${p.title}</a></h4>
      <p>${p.description}</p>
    `;
    grid.appendChild(card);
  });
}

document.getElementById('footer-year').textContent = new Date().getFullYear();
renderProjects();