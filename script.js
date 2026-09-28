// Welcome Message
window.onload = function () {
    console.log("Welcome to Enike's Bakes nd More!");
};

// Highlight the active navigation link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Simple order confirmation (used later on the order page)
function placeOrder() {
    alert("🎉 Thank you for choosing Enike's Bakes nd More!\n\nYour order has been received successfully.");
}