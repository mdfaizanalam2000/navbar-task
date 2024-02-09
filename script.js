const displayMenu = () => {
    document.getElementById("bottom").style.display = "block"
    document.getElementById("hamburger-expand").style.display = "none"
    document.getElementById("hamburger-close").style.display = "block"
}

const closeMenu = () => {
    document.getElementById("bottom").style.display = "none"
    document.getElementById("hamburger-expand").style.display = "block"
    document.getElementById("hamburger-close").style.display = "none"
}