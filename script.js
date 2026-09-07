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
