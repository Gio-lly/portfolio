// Dati dei progetti: modifica/aggiungi voci qui per aggiornare il portfolio.
const projects = [
    {
        id: "OR-BEAT",
        title: "OR-BEAT",
        category: "Web App",
        year: "2025",
        hue: 205,
        github: "https://github.com/Gio-lly/OR-BEAT",
        image: "images/orbeat.png",
        tech: ["HTML", "CSS", "JavaScript", "Tone.js", "p5.js"],
        description: "A drum machine web application that allows users to create unique polyrithmic beats. "+
        "Based on the polyrhythmic weel, the app provides a transient detection algorithm that automatically slices the sample uploaded by the user,"+
        "as well as a simple recorder that lets users record their composition. It is also possible to stack different cuts of the sample to create more complex beats."+
        " The app is built using HTML, CSS, JS and Tone.js, P5.js. The project was developed as parto of the 'Advanced Coding Tools and Methodologies' course at Politecnico di Milano."
    },
    {
        id: "Hand2Hand",
        title: "Hand2Hand",
        category: "Computer Music System",
        year: "2025",
        hue: 320,
        image: "images/hand2hand.png",
        github: "https://github.com/Gio-lly/Hand2Hand-computer-music-system",
        tech: ["Leap Motion", "SuperCollider", "C++", "Processing","JUCE"],
        description: "Hand2Hand is a computer music system that allows the performer to use his/her hands to control the sound synthesis."+
        "The system is based on a Leap Motion controller tbat tracks the performer's hands and fingers, and a Supercollider that generates the sound. The system is designed to incorporate a vst plugin that exposes the sound synthesis parameters to the performer, allowing for a more expressive performance. "+
        "We also coded our own vst multi-effect plugin, fully controllable through the Leap Motion controller."+
        "The project was developed as part of the 'Computer Music Languages and Systems' course at Politecnico di Milano."
    },
    {
        id: "LPC",
        title: "Linear Predictive Coding",
        category: "Sound synthesis and processing",
        year: "2025",
        hue: 40,
        github: "https://github.com/Gio-lly/sasp-first-homework",
        tech: ["MATLAB"],
        report: "report/DAAP_report.pdf",
        description: "This project implements a Linear Predictive Coding (LPC-10) analysis/synthesis system in MATLAB, reproducing the speech-coding approach used in the 1978 Texas Instruments Speak & Spell toy (sold in Italy as Grillo parlante), whose TMC0280 chip synthesized speech from a compact set of LPC parameters."+
        "The project was developed as part of the 'Sound Analysis, Synthesis and Processing' course at Politecnico di Milano."
    },
    {
        id: "Wave Digital Synthesis",
        title: "Wave Digital Synthesis",
        category: "Sound synthesis and processing",
        year: "2025",
        hue: 60,
        image: "images/wdf.png",
        tech: ["MATLAB"],
        report: "report/SSSP_report.pdf",
        description: "This project focuses on the development of a Wave Digital Filter (WDF) model for a piezoelectric MEMS loudspeaker, based on the linear lumped-element reference circuit provided"+
        " in the assignment. The original analog model is converted into its WDF equivalent using"+
        "a fully explicit computational approach, deliberately excluding iterative solution methods. The performance of the implemented WDF model is then evaluated by comparing"+
        "its output to the reference signal obtained from a Simscape simulation, considering both"+
        "time-domain and frequency-domain analyses."
    },
    {
        id: "Cathartic",
        title: "Cathartic",
        category: "Interactive Sound Installation",
        year: "2026",
        hue: 180,
        image: "images/Cathartic.png",
        report: "report/Cathartic.pdf",
        github: "https://github.com/Gio-lly/Cathartic---CPAC-Final-Project",
        description: "Cathartic is an interactive audiovisual installation exploring how artificial intelligence can "+
        "support a personal and non-judgmental moment of emotional reflection. "+
        "The project invites visitors to express something they are carrying inside: a feeling, a "+
        "thought, a concern, or a secret. Rather than answering through language or attempting to "+
        "interpret the visitor’s experience, the system transforms the submitted text into an evolving "+
        "audiovisual environment."+
        "Cathartic is envisioned as an intimate, capsule-like installation in which the visitor can "+
        "temporarily step away from the surrounding environment and focus on the generated "+
        "experience. The experience begins with a short disclaimer explaining the temporary and "+
        "private nature of the interaction. The visitor is then invited to type a message. Once "+
        "submitted, the text is processed in real time by an emotion-detection model that produces a "+
        "continuous, multi-emotion representation rather than assigning the message to a single "+
        "emotional category. "+
        "The detected emotions influence a real-time generative music model by controlling a "+
        "combination of weighted textual and audio prompts. At the same time, they define the "+
        "general colour palette and visual character of a responsive particle system inspired by "+
        "Chladni resonance patterns."
    },
    {
        id: "Banjo Modelling",
        title: "Banjo Modelling",
        category: "Physical Modelling",
        year: "2026",
        hue: 100,
        image: "images/banjo.png",
        report: "report/Banjo_Modeling_Serra_Impembo_Mattina.pdf",
        description: "The project is a musical-acoustics modeling study whose goal is to characterize the vibro-acoustic behavior of a banjo-like instrument and, ultimately, to synthesize its sound. The instrument is idealized as three coupled elements — a circular aluminum soundboard (a thin, clamped plate), an iron string stretched over it, and a resonating soundbox — and the work traces the full chain from the physical/mechanical characterization of these parts to the audio signal that the assembled instrument would radiate when the string is plucked. In short, it aims to show how the modal and resonant properties of the body shape the timbre of a struck string.\n\n" +
            "The study combines analytical modeling with finite-element simulation. On the analytical side, it characterizes the plate by computing the propagation speeds of quasi-longitudinal and longitudinal waves, the frequency-dependent (dispersive) speed of bending waves, and the modal frequencies of its first six bending modes. These analytical results are then cross-checked against a COMSOL eigenfrequency study, which returns both the frequencies and the mode shapes; a further COMSOL simulation applies a string-like point force to the plate to extract the driving-point mobility (admittance) Yc at the excitation point.\n\n" +
            "The second half of the project introduces the string and the coupling between string and soundboard. The string is tuned so that its fundamental coincides with the plate's first mode, which fixes the required tension, and the frequencies of the coupled string–soundboard system are then computed while accounting for the plate's modal damping through assigned merit (quality) factors Q. The soundboard admittance is modeled as a sum of modal contributions, and the calculation is repeated for two different sets of Q values (a more damped case Yl and a more resonant case Yh) to compare how damping affects the response. The plate is then mounted on a soundbox, whose Helmholtz resonance is computed and added to the admittances (yielding Yl′ and Yh′), so that the air cavity's contribution is included.\n\n" +
            "Finally, the project uses these admittances as filters: the vibrational signal of a string plucked at one-fifth of its length is passed through Yl′, Yh′, and Yc, with a prescribed decay time of 1.3 s, to synthesize the radiated sound. The deliverables are a concise report describing the procedure, the COMSOL model, and the sound-synthesis code together with the resulting audio."
    },
    {
        id: "HRTF Simulation and Study",
        title: "HRTF Simulation and Study",
        category: "Spatial Audio",
        year: "2026",
        hue: 280,
        image: "images/hrtf.png",
        report: "report/HRTF_report.pdf",
        github: "https://github.com/Gio-lly/A-Comparative-Study-of-HRTF-Measurements-and-Simulations-Using-SONICOM-Data",
        description: "HRTF Simulation and Study is a project that aims to simulate and study the Head-Related Transfer Function (HRTF) using digital signal processing techniques. The project uses a combination of convolution and filtering to create a realistic HRTF simulation. The project was developed as part of the 'Spatial Audio' course at Politecnico di Milano."
    },
    {
        id: "Music Instrument Classification",
        title: "Music Instrument Classification",
        category: "Machine Learning",
        year: "2026",
        hue: 220,
        description: "Music Instrument Classification is a project that aims to classify musical instruments using machine learning techniques. The project uses a combination of feature extraction and classification algorithms to create a model that can accurately classify musical instruments. The project was developed as part of the 'Machine Learning for Audio' course at Politecnico di Milano."
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
                  font-family="Consolas, Courier New, monospace" font-weight="700"
                  letter-spacing="6" font-size="38" fill="hsl(${hue}, 40%, 70%)">
                ${title.toUpperCase()}
            </text>
        </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Usa project.image se presente, altrimenti genera un segnaposto.
function getProjectImage(project) {
    return project.image || placeholderImage(project.title, project.hue);
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
            <div class="project-card-image" style="background-image:url('${getProjectImage(project)}')"></div>
            <div class="project-card-body">
                <h3>${project.title}</h3>
                <p class="project-meta">${project.category} · ${project.year}</p>
            </div>
        `;

        const open = () => { window.location.hash = `/projects/${encodeURIComponent(project.id)}`; };
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

    const reportButton = project.report
        ? `<a class="report-btn" href="${project.report}" download target="_blank" rel="noopener noreferrer">Download Report (PDF)</a>`
        : "";

    const techList = project.tech && project.tech.length
        ? `<ul class="tech-list">${project.tech.map((t) => `<li>${t}</li>`).join("")}</ul>`
        : "";

    const descriptionParagraphs = project.description
        .split("\n\n")
        .map((paragraph) => `<p class="project-detail-description">${paragraph}</p>`)
        .join("");

    projectDetail.innerHTML = `
        <img class="project-detail-image" src="${getProjectImage(project)}" alt="${project.title}">
        <p class="project-meta">${project.category} · ${project.year}</p>
        <h1>${project.title}</h1>
        ${descriptionParagraphs}
        ${techList}
        <div class="project-actions">
            ${githubButton}
            ${reportButton}
        </div>
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
        const id = decodeURIComponent(projectMatch[1]);
        const project = projects.find((p) => p.id === id);
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
