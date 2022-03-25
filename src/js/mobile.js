export default function initMobile() {
    const hamburgerIcon = document.querySelector(".bars")
    const navbar = document.querySelector("nav.navbar")
    const navElements = document.querySelectorAll("[data-mobile]")

    function mobileMenuOpen() {
        navElements.forEach((element) => {
            const elementCls = element.dataset.mobile
            element.classList.toggle(elementCls)
        })
    }

    hamburgerIcon.addEventListener("click", mobileMenuOpen)
}