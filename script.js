document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    // Intersection Observer callback function
    const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // User has scrolled to the end of the list
                // Add 2 more list items
                addMoreItems();
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(
        intersectionCallback,
        observerOptions
    );

    // Start observing the last list item
    const lastListItem = list.lastElementChild;
    observer.observe(lastListItem);

    // Function to add more list items
    const addMoreItems = () => {
        for (let i = 0; i < 2; i++) {
            const newItem = document.createElement("li");
            newItem.textContent = "Item " + (list.childElementCount + 1);
            list.appendChild(newItem);
        }
    };

    // Initial population of the list with 10 items
    for (let i = 1; i <= 10; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = "Item " + i;
        list.appendChild(newItem);
    }
});
