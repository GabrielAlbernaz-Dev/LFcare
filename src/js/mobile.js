export default function initMobile() {
    const hamburgerIcon = document.querySelector(".bars")
    const navbar = document.querySelector("nav.navbar")
    const navElements = document.querySelectorAll("[data-mobile]")
    const arrowDownIcon = document.querySelector(".arrow-down")

    function mobileMenuOpen() {
        navElements.forEach((element) => {
            const elementCls = element.dataset.mobile
            element.classList.toggle(elementCls)
        })

        if(navbar.classList.contains("open")) {
            arrowDownIcon.classList.add("hide")
        } else {
            arrowDownIcon.classList.remove("hide")
        }
    }
    

    hamburgerIcon.addEventListener("click", mobileMenuOpen)
}