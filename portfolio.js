let  menuIcon =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

emailjs.init({
    publicKey: "PGVV0c1KmoNfW-fW2"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const button = document.getElementById("send-btn");

    emailjs.sendForm(
        "service_8nthn7t",
        "template_a0psik3",
        contactForm
    )
    .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS status:",error.status);
        console.error("EmailJS details:",error.txt);
        alert("Email error:" +error.text);
    })
    .finally(() => {
        button.disabled = false;
        button.value = "Send Message";
    });
});