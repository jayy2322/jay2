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
   JAYARA MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");
    const navbar = document.querySelector(".navbar-mobile");

    if (!button || !menu || !navbar) {
        console.log("Mobile navbar elements missing");
        return;
    }

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        menu.classList.toggle("open");
        navbar.classList.toggle("menu-open");

    });


    /* Close after clicking a link */

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("open");
            navbar.classList.remove("menu-open");

        });

    });

});
/* =========================================================
   JAYARA WEB WORKS — MOBILE NAVBAR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        console.warn("Mobile navbar elements not found.");
        return;
    }

    menuButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen = mobileMenu.classList.toggle("open");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        document.body.classList.toggle(
            "mobile-menu-open",
            isOpen
        );

    });


    /* Close menu when a link is clicked */

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "mobile-menu-open"
            );

        });

    });


    /* Close with ESC */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "mobile-menu-open"
            );

        }

    });

});
