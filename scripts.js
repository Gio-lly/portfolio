// Dati dei progetti: modifica/aggiungi voci qui per aggiornare il portfolio.
const projects = [
    {
        id: "OR-BEAT",
        title: "OR-BEAT",
        category: "Web App",
        year: "2025",
        hue: 205,
        github: "https://github.com/Gio-lly/OR-BEAT",
        description: "A drum machine web application that allows users to create unique polyrithmic beats. "+
        "Based on the polyrhythmic weel, the app provides a transient detection algorithm that automatically slices the sample uploaded by the user,"+
        "as well as a simple recorder that lets users record their composition. It is also possible to stack different cuts of the sample to create more complex beats."+
        " The app is built using HTML, CSS, JS and Tone.js, P5.js. The project was developed as parto of the 'Advanced Coding Tools and Methodologies' course at Politecnico di Milano."
    },
    {
        id: "progetto-due",
        title: "Nome Progetto 2",
        category: "Design",
        year: "2024",
        hue: 320,
        github: "https://github.com/Gio-lly",
        description: "Descrizione del secondo progetto: contesto, obiettivi e risultati ottenuti " +
            "durante lo sviluppo."
    },
    {
        id: "progetto-tre",
        title: "Nome Progetto 3",
        category: "Sperimentazione",
        year: "2024",
        hue: 40,
        github: "https://github.com/Gio-lly",
        description: "Descrizione del terzo progetto: una breve panoramica su idea, processo " +
            "creativo e strumenti usati."
    }
];

const views = {
    home: document.getElementById("view-home"),
    projects: document.getElementById("view-projects"),
    project: document.getElementById("view-project"),
    photography: document.getElementById("view-photography"),
    music: document.getElementById("view-music")
};

const grid = document.getElementById("projects-grid");
const projectDetail = document.getElementById("project-detail");

// Genera un'immagine segnaposto (SVG) per i progetti privi di immagine reale.
function placeholderImage(title, hue) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
            <rect width="900" height="600" fill="hsl(${hue}, 30%, 14%)" />
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
                  font-family="Georgia, serif" font-size="42" fill="hsl(${hue}, 40%, 70%)">
                ${title}
            </text>
        </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function renderProjects() {
    grid.innerHTML = "";
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Apri il progetto ${project.title}`);

        card.innerHTML = `
            <div class="project-card-image" style="background-image:url('${placeholderImage(project.title, project.hue)}')"></div>
            <div class="project-card-body">
                <h3>${project.title}</h3>
                <p class="project-meta">${project.category} · ${project.year}</p>
            </div>
        `;

        const open = () => { window.location.hash = `/projects/${project.id}`; };
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });

        grid.appendChild(card);
    });
}

function showProject(project) {
    const githubButton = project.github
        ? `<a class="github-btn" href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub</a>`
        : "";

    projectDetail.innerHTML = `
        <img class="project-detail-image" src="${placeholderImage(project.title, project.hue)}" alt="${project.title}">
        <p class="project-meta">${project.category} · ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="project-detail-description">${project.description}</p>
        ${githubButton}
    `;
}

function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
        el.classList.toggle("is-hidden", key !== name);
    });
    window.scrollTo(0, 0);
}

function router() {
    const hash = window.location.hash.replace(/^#\/?/, "");

    if (hash === "projects") {
        showView("projects");
        return;
    }

    const projectMatch = hash.match(/^projects\/(.+)$/);
    if (projectMatch) {
        const project = projects.find((p) => p.id === projectMatch[1]);
        if (project) {
            showProject(project);
            showView("project");
            return;
        }
    }

    if (hash === "photography") {
        showView("photography");
        return;
    }

    if (hash === "music") {
        showView("music");
        return;
    }

    showView("home");
}

document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.hash = btn.dataset.back;
    });
});

window.addEventListener("hashchange", router);

renderProjects();
router();
