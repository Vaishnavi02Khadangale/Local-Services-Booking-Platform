
document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let booking = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
        service: document.getElementById("service").value,
        notes: document.getElementById("notes").value,
        status: "Requested"
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking Created Successfully!");

    window.location.href = "status.html";

});