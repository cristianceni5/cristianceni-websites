const educationData = [
    {
        title: "Diploma in Manutenzione ed Assistenza Tecnica",
        institution: "IIS Cellini - Tornabuoni",
        year: "2020 - 2025",
        details: "Esito finale: 94/100",
        img: "img/cellini.png"
    },
    {
        title: "Ingegneria Informatica",
        institution: "Università degli Studi di Firenze",
        year: "2025 - presente",
        details: "Attualmente iscritto",
        img: "img/unifi.png"
    }
];

const jobsData = [
    {
        title: "Stage - Manutentore Elettrico",
        company: "Bartolozzi Srl.",
        year: "2024",
        details: "Esperienza di stage presso Bartolozzi Srl. come manutentore elettrico, acquisendo competenze pratiche nel settore.",
        skills: ["Elettricità", "Manutenzione", "Problem-solving"]
    },
    {
        title: "Manutentore Elettrico Freelance",
        company: "Cristian Ceni",
        year: "2020 - Present",
        details: "Offro servizi di manutenzione elettrica freelance, risolvendo problemi e migliorando l'efficienza degli impianti elettrici per i miei clienti.",
        skills: ["Elettricità", "Manutenzione", "Problem-solving"]
    },
    {
        title: "Montatore infissi",
        company: "Fabio Ceni",
        year: "2025 - Present",
        details: "Lavoro nell'azienda di famiglia come motatore infissi, occupandomi dell'installazione e manutenzione di infissi (porte, finestre, ecc.) per clienti residenziali e commerciali.",
        skills: ["Manualità", "Manutenzione", "Problem-solving"]
    },
    {
        title: "Developer Freelance",
        company: "Cristian Ceni",
        year: "2021 - Present",
        details: "Sviluppo di siti web e applicazioni per clienti freelance, con un focus su soluzioni personalizzate e responsive.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Unity"]
    },
];

const projectsData = [
    {
        image: "img/cs_white.png",
        title: "Ceni Dev Website",
        description: "Sito web personale per mostrare i miei progetti, esperienze e competenze nel campo dello sviluppo web e della manutenzione elettrica.",
        link: "https://cenidev.com"
    },
    {
        image: "img/gusto.png",
        title: "Gustò Donnini - Menù digitale",
        description: "Menù digitale sviluppat per Gustò Donnini, utile per i clienti e per il personale di sala. Ha ridotto i tempi di attesa per i clienti e velocizzato l'intero staff. Invia gli ordini tramite WhatsApp.",
        link: "https://gustodonnini.com"
    },
    {
        image: "img/ari.png",
        title: "Arinails Salon - Sito web",
        description: "Semplice sito web per Arinails Salon, una nail artist. Il sito presenta i servizi offerti, una galleria di immagini e un modulo di contatto per prenotazioni e richieste.",
        link: "https://arinails.cenidev.com"
    },
    {
        image: "img/gauss.png",
        title: "Gauss Project - Social per studenti",
        description: "Social network dedicato per tutti gli studenti, prototipo in fase di sviluppo. L'obiettivo è creare una piattaforma dove gli studenti possono condividere risorse, fare domande e connettersi con altri studenti.",
        link: "https://gauss.cenidev.com"
    },
    {
        image: "img/treninfo.png",
        title: "Treninfo - Applicazione mobile",
        description: "Applicazione mobile per la gestione delle informazioni sui treni, fornendo aggiornamenti in tempo reale e notifiche agli utenti.",
        link: "https://treninfo.cenidev.com"
    },
    {
        image: "img/treninfo-server.png",
        title: "Treninfo - Server",
        description: "Server per l'applicazione Treninfo, gestendo le richieste degli utenti e fornendo dati in tempo reale sull'orario dei treni. Unisce le info di ViaggiaTreno, LeFrecce e ItaloTreno in un unico servizio.",
        link: "https://treninfo.cenidev.com"
    }
];

//Function to display this brothers up here on the page
function displayEducation() {
    const eduCont = document.getElementById("education");
    educationData.forEach(edu => {
        const eduItem = document.createElement("div");
        eduItem.classList.add("education-item");
        eduItem.innerHTML = `
            <img src="${edu.img}" alt="${edu.institution} logo" class="education-logo">
            <h3>${edu.title}</h3>
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.year}</p>
            <p>${edu.details}</p>
        `;
        eduCont.querySelector(".dynamic-edu").appendChild(eduItem);
    });
}

//Function to display yeah that
function displayJobs() {
    const jobsCont = document.getElementById("jobs");
    jobsData.forEach(job => {
        const jobItem = document.createElement("div");
        jobItem.classList.add("job-item");
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>${job.company}</strong></p>
            <p>${job.year}</p>
            <p>${job.details}</p>
            <hr>
            <div class="job-skills">
                ${job.skills.map(skill => `<p>${skill}</p>`).join("")}
            </div>
        `;
        jobsCont.querySelector(".dynamic-jobs").appendChild(jobItem); 
    });
}

//Function to display projects
function displayProjects() {
    const projectsCont = document.getElementById("projects");
    projectsData.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title} image" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>Guarda il progetto</a>
        `;
        projectsCont.querySelector(".dynamic-proj").appendChild(projectItem);
    });
}

//Function called when to page is shown, i take it like the void Start() of Unity, yeah don't judge me.
onpageshow = () => {
    displayEducation();
    displayJobs();
    displayProjects();
}