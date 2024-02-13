const toggleMenu = () => {
    let navElem = document.getElementById("bottom")
    let toggleElem = document.getElementById("hamburger-expand")
    if (navElem.style.display === "") {
        navElem.style.display = "block"
        toggleElem.classList.remove("fa-bars")
        toggleElem.classList.add("fa-xmark")
    }
    else {
        navElem.style.display = ""
        toggleElem.classList.remove("fa-xmark")
        toggleElem.classList.add("fa-bars")
    }
}

const toggleProfile = () => {
    let elem = document.querySelector(".menu")
    if (elem.style.display === "") {
        elem.style.display = "block"
    }
    else {
        elem.style.display = ""
    }
}