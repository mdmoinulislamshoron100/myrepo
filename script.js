
// ===============================
// 1. Dynamic Footer Year
// ===============================

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} Md. Moinul Islam.
        All Rights Reserved.</p>
    `;
}


// ===============================
// 2. Active Navigation Link
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// ===============================
// 3. Dark Mode Toggle
// ===============================

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "Toggle Dark Mode";
darkModeButton.style.marginTop = "15px";

document.querySelector("header")?.appendChild(darkModeButton);

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// ===============================
// 4. Contact Form Validation
// ===============================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {

            alert("Please fill in all fields!");

        } else {

            alert(`Thank you, ${name}! Your message has been received.`);

            contactForm.reset();

        }

    });

}


// ===============================
// 5. Typing Animation
// ===============================

const typingText = document.querySelector("#home p");

if (typingText) {

    const text = "I am a passionate Web Developer.";
    let index = 0;

    typingText.textContent = "";

    function typeEffect() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeEffect, 80);

        }

    }

    typeEffect();

}


// ===============================
// 6. Scroll to Top Button
// ===============================

const scrollButton = document.createElement("button");

scrollButton.textContent = "↑";
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.display = "none";
scrollButton.style.borderRadius = "50%";

document.body.appendChild(scrollButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollButton.style.display = "block";

    } else {

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
