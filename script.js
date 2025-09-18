// logo click returns user to home page
// https://stackoverflow.com/questions/8536653/onclick-on-a-image-to-navigate-to-another-page-using-javascript
function goHome() {
    window.location.href = "index.html";
}

// provides feedback to user about what page they are currently on
// https://stackoverflow.com/questions/72050328/add-active-class-to-navbar-element-when-clicked
document.addEventListener("DOMContentLoaded", () => {  // wait until the page content has fully loaded
    const currentPage = window.location.pathname.split("/").pop(); 
    // removes slash from pathname

    // select all navigation links with the class "nav-link"
    document.querySelectorAll(".nav-link").forEach((link) => {
        const linkPage = link.getAttribute("href");  // get filename from each link

        if (linkPage === currentPage) {
            link.classList.add("active");  // add the active class to highlight it in CSS
            link.setAttribute("aria-current", "page"); // which nav item is in current page
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
});