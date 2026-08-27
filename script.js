const headers = document.querySelectorAll(".accordion-item-header")

headers.forEach(header => {
    header.addEventListener("click", () => {
        const wasOpen = header.classList.contains("active");

        headers.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = 0;
        });

        if (!wasOpen) {
            header.classList.add("active");
            header.nextElementSibling.style.maxHeight = header.nextElementSibling.scrollHeight + "px";
        }
    });
});