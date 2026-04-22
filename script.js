const messages = [
    "I know things are tough right now, but I’m always here for you 💖",
    "You are stronger than this moment 💪",
    "You matter more than you think 🌸",
    "This pain won’t last forever 🌈",
    "Take it one day at a time 🫶",
    "You are deeply loved 💜"
];

let typingSpeed = 50;
let messageIndex = 0;
let charIndex = 0;

// Typing function
function typeMessage(text, callback) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "";
    charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            messageElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Wait a bit, then move to next message
            setTimeout(callback, 1500);
        }
    }

    type();
}

// Show messages one after another
function showMessagesSequentially() {
    if (messageIndex < messages.length) {
        typeMessage(messages[messageIndex], () => {
            messageIndex++;
            showMessagesSequentially();
        });
    } else {
        // AFTER ALL messages → show button
        document.getElementById("closeBtn").style.display = "inline-block";
    }
}

// Close page
function closePage() {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background: linear-gradient(135deg, #ffe4f2, #e6ccff);
            font-family: Arial;
            text-align:center;
        ">
            <h1 style="color:#7b2cbf;">Take care 💜</h1>
            <p style="color:#5a189a;">You are loved more than you know.</p>
        </div>
    `;
}

// Start everything on load
window.onload = function () {
    showMessagesSequentially();
};

// Slideshow (2 images)
const photos = [
    "photo.jpg",
    "photo1.jpg"
];

let index = 0;

function changeSlide() {
    index = (index + 1) % photos.length;
    document.getElementById("slide").src = photos[index];
}

setInterval(changeSlide, 3000);