document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll("main section");
  
    // Coursework items
    const courseworkItems = [
      { name: "Applied GIS Techniques", link: "wildflower.html" },
      {
        name: "UNC and North Carolina Botanical Gardens Habitat Suitability Analysis",
        link: "storymap.html",
      },
      { name: "Drone Mapping Comparison", link: "drone.html" },
      { name: "Geovisualization", link: "geovisualization.html" },
    ];
  
    const courseworkButtonsContainer = document.getElementById("coursework-buttons");
    courseworkItems.forEach(item => {
      const btn = document.createElement("button");
      btn.textContent = item.name;
      btn.classList.add("sub-btn");
      btn.addEventListener("click", () => (window.location.href = item.link));
      courseworkButtonsContainer.appendChild(btn);
    });
  
    // Projects
    const projectsItems = [
      { name: "Friends of Lower Haw River", link: "floha.html" },
      { name: "Bald Head Island Conservancy", link: "bhic.html" },
    ];
  
    const projectsButtonsContainer = document.getElementById("projects-buttons");
    projectsItems.forEach(item => {
      const btn = document.createElement("button");
      btn.textContent = item.name;
      btn.classList.add("sub-btn");
      btn.addEventListener("click", () => (window.location.href = item.link));
      projectsButtonsContainer.appendChild(btn);
    });
  
    // Navigation button behavior
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-section");
  
        sections.forEach(sec => sec.classList.add("hidden"));
        const selected = document.getElementById(target);
        if (selected) selected.classList.remove("hidden");
      });
    });
  
    // Handle ?show= parameter (used by Back to Coursework)
    const params = new URLSearchParams(window.location.search);
    const sectionToShow = params.get("show");
  
    sections.forEach(sec => sec.classList.add("hidden")); // hide all first
  
    if (sectionToShow) {
      const targetSection = document.getElementById(sectionToShow);
      if (targetSection) targetSection.classList.remove("hidden");
    } else {
      // 👇 Default visible section (About)
      const defaultSection = document.getElementById("about");
      if (defaultSection) defaultSection.classList.remove("hidden");
    }
  
    // Auto-update year in footer
    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
  });
  