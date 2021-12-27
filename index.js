// Google Map //
function initMap() {
    const homeAddress = { lat: 13.656435, lng: 100.594349 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: homeAddress,
        mapId: "d44276570a314d59"
    });
    const marker = new google.maps.Marker({
        position: homeAddress,
        map: map,
    });
}

// Age //
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const myAge = currentYear - 1995
document.getElementById("myAge").innerHTML = myAge

// Smooth scroller //
function smoothNavigation(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    })
}

// Scroll reveal //
ScrollReveal().reveal('.timeline--1', { delay: 300 });
ScrollReveal().reveal('.timeline--2', { delay: 300 });
ScrollReveal().reveal('.timeline--3', { delay: 300 });