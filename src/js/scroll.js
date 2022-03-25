export default function initScrollFn() {
    const navbar = document.querySelector("nav.navbar")
    function scrollNav() {
        if (window.scrollY >= 10) {
            navbar.classList.add("active")
        } else {
            navbar.classList.remove("active")
        }
    }
    window.addEventListener("scroll", scrollNav)

    const sectionScroll = document.querySelectorAll("[data-scroll]")
    function activeScroll(cb) {
        sectionScroll.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top
            const sectionScrollClass = section.dataset.scroll
            if(window.scrollY > sectionTop + 200) {
                section.classList.add(sectionScrollClass)
            }  else {
                cb()
            }
        })
    }
    window.addEventListener("scroll",()=>{
        activeScroll(removeScrollEvent)
    })

    function removeScrollEvent() {
        window.removeEventListener("scroll",activeScroll)
    }

    const sectionLinksNav = document.querySelectorAll("a[href^='#']")
    function scrollToSection(e) {
        const navElements = document.querySelectorAll("[data-mobile]")
        e.preventDefault()

        navElements.forEach((element) => {
            const elementCls = element.dataset.mobile
            element.classList.remove(elementCls)
        })

        const linkHref = e.currentTarget.getAttribute("href")
        const linkSection = document.querySelector(linkHref)
        const navbarHeight = navbar.offsetHeight

        window.scrollTo({
            top: linkSection.offsetTop - navbarHeight,
            behavior: "smooth"
        })
    }
    sectionLinksNav.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })

}