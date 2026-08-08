/* ================= CUSTOM CURSOR ================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* Hover effect on clickable elements */

const clickableElements = document.querySelectorAll(
    "a, button, input, textarea, .skill-card, .project-card, .achievement-card"
);

clickableElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorDot.classList.add("hover");
        cursorRing.classList.add("hover");

    });

    element.addEventListener("mouseleave", () => {

        cursorDot.classList.remove("hover");
        cursorRing.classList.remove("hover");

    });

});


// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;


    const mailBody =
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `${message}`;


    window.location.href =
        `mailto:yourmail@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailBody}`;

}

