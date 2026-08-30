const projects = {

    grocers: {
        title: "Urban Grocers",

        description:
            "E-commerce application evaluated from a Quality Assurance perspective.",

        role: [
            "Designed and executed test cases.",
            "Performed functional testing.",
            "Performed API testing using Postman.",
            "Identified and reported bugs.",
            "Evaluated usability and application behavior."
        ],

        tools:
            "Manual QA · Postman · API Testing · Test Cases · Bug Reporting"
    },

    routes: {
        title: "Urban Routes",

        description:
            "Transportation and route-planning application evaluated through functional and usability testing.",

        role: [
            "Performed functional testing of the application.",
            "Created and executed test cases.",
            "Validated application behavior and user flows.",
            "Identified and reported bugs.",
            "Evaluated usability and interface behavior."
        ],

        tools:
            "Manual QA · Functional Testing · Usability Testing · Bug Reporting"
    }

};


function openProject(projectId) {

    const project = projects[projectId];

    const modal = document.getElementById("projectModal");

    const content = document.getElementById("modalContent");

    content.innerHTML = `

        <div class="case-study">

            <div class="project-number">
                CASE STUDY
            </div>

            <h2>${project.title}</h2>

            <p>
                ${project.description}
            </p>

            <h3>My role</h3>

            <ul>
                ${project.role
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

            <h3>Tools & skills</h3>

            <p>
                ${project.tools}
            </p>

        </div>

    `;

    modal.classList.add("active");
}


function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

}


document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeProject();
        }

    });


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});
