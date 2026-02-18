const apartments = {
    "bedem1": {
        title: "Bedem I",
        price: "from €80 / night",
        desc: "An urban sanctuary defined by understated elegance. Located in the vibrant heart of the city, Bedem I offers a seamless blend of modern luxury and local charm.",
        features: ["King Size Bed", "High-Speed Wi-Fi", "Rain Shower", "Concierge Access"],
        img: "assets/bedem_1.jpg"
    },
    "bedem2": {
        title: "Bedem II",
        price: "from €95 / night",
        desc: "Experience history in our most prestigious suite. With soaring ceilings and antique details, Bedem II is for the discerning traveler.",
        features: ["Historical Balcony", "Smart Home Tech", "Gourmet Kitchen", "Private Entry"],
        img: "assets/bedem_2.jpg"
    },
    "bedem3": {
        title: "Bedem III",
        price: "from €70 / night",
        desc: "A masterclass in minimalism. Clean lines and soft textures create a tranquil environment for rest and inspiration.",
        features: ["Queen Size Bed", "Work Studio", "Nespresso Bar", "Panoramic Windows"],
        img: "assets/bedem_3.jpg"
    },
    "nature": {
        title: "Bedem Nature",
        price: "from €120 / night",
        desc: "Where the forest meets luxury. A secluded retreat designed to reconnect you with the natural world without compromising on comfort.",
        features: ["Outdoor Firepit", "Stargazing Deck", "Organic Linens", "Private Trail Access"],
        img: "assets/bedem_nature.jpg"
    }
};

function openApt(id) {
    const data = apartments[id];
    const modal = document.getElementById("aptModal");
    const body = document.getElementById("modal-body");

    body.innerHTML = `
        <img src="${data.img}" class="modal-detail-img">
        <div class="modal-text">
            <h2>${data.title}</h2>
            <p class="modal-price">${data.price}</p>
            <p>${data.desc}</p>
            <ul class="modal-features">
                ${data.features.map(f => `<li>— ${f}</li>`).join('')}
            </ul>
            <a href="https://wa.me/385916160031?text=Inquiry for ${data.title}" class="btn-gold">Check Availability</a>
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeApt() {
    document.getElementById("aptModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal if clicking outside of the content
window.onclick = function(event) {
    const modal = document.getElementById("aptModal");
    if (event.target == modal) {
        closeApt();
    }
}

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();