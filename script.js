/* =====================================================
   WHATSAPP PROJECT ENQUIRY
===================================================== */

const projectForm = document.getElementById("projectForm");

if (projectForm) {

    projectForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const business = document.getElementById("business").value.trim();
        const service = document.getElementById("service").value;
        const budget = document.getElementById("budget").value || "Not specified";
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "917972219776";

        const whatsappMessage = `
Hello Jayara Web Works 👋

I would like to discuss a project with you.

━━━━━━━━━━━━━━━━━━
PROJECT ENQUIRY
━━━━━━━━━━━━━━━━━━

👤 Name:
${name}

📧 Email:
${email}

🏢 Business / Brand:
${business || "Not provided"}

💻 Service Required:
${service}

💰 Estimated Budget:
${budget}

📝 Project Details:
${message}

━━━━━━━━━━━━━━━━━━

Looking forward to hearing from you.

Regards,
${name}
        `.trim();

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}

/* =========================================================
   MOBILE NAVBAR
========================================================= */

const jwNavbar = document.getElementById("jwNavbar");
const jwMenu = document.getElementById("jwMenu");
const jwNavLinks = document.querySelectorAll(".jw-nav-link");

if (jwMenu && jwNavbar) {

    // Open / close mobile menu
    jwMenu.addEventListener("click", () => {
        jwNavbar.classList.toggle("menu-open");

        const isOpen = jwNavbar.classList.contains("menu-open");

        jwMenu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        document.body.classList.toggle("nav-open", isOpen);
    });


    // Close menu when a navigation link is clicked
    jwNavLinks.forEach(link => {
        link.addEventListener("click", () => {

            jwNavbar.classList.remove("menu-open");
            document.body.classList.remove("nav-open");

            jwMenu.setAttribute("aria-label", "Open menu");
        });
    });


    // Close menu when clicking outside navbar
    document.addEventListener("click", (event) => {

        if (
            jwNavbar.classList.contains("menu-open") &&
            !jwNavbar.contains(event.target)
        ) {
            jwNavbar.classList.remove("menu-open");
            document.body.classList.remove("nav-open");

            jwMenu.setAttribute("aria-label", "Open menu");
        }
    });


    // Close menu when pressing Escape
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            jwNavbar.classList.remove("menu-open");
            document.body.classList.remove("nav-open");

            jwMenu.setAttribute("aria-label", "Open menu");
        }
    });

}
