(() => {
    const menuBtnRef = document.querySelector("[menu-open]");
    const mobMenuRef = document.querySelector("[menu-cont]");
    menuBtnRef.addEventListener("click",() => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobMenuRef.classList.toggle("is-open");
    });
})();