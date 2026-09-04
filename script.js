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
    },
    food: {
        title: "Urban Food",

        description:
            "Urban.Lunch is a mobile food-ordering application that allows users to create customized business meals by combining dishes from different restaurants and collecting them at a selected pickup point.",

        role: [
            "Responsible for analyzing requirements and Figma designs.",
            "Creating and executing test cases.",
            "Performing functional and UI testing on the Android application.",
            "Validating calculations and end-to-end user flows.",
            "Reporting defects in Jira with clear reproduction steps and expected vs. actual results.."
        ],

        tools:
            "Manual QA · Functional Testing · Usability Testing · Bug Reporting · Mobile Testing · UI Testing · Android · Test cases"
    },
    scooter: {
        title: "Urban Scooter",

        description:
            "Urban Scooter is a web and mobile application that allows users to rent electric scooters for convenient urban transportation.",

        role: [
            "Responsible for analyzing requirements and designs.",
            "Creating and executing test cases, performing functional.",
            "UI.",
            "End to end testing.",
            "Validating core user flows.",
            "Reporting defects in Jira with clear reproduction steps and expected vs. actual results.."
        ],

        tools:
            "Manual Testing · Functional Testing · Web Testing · Mobile Testing · UI Testing · Test Cases · Jira · Bug Reporting · Requirements Analysis"
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
