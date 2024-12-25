function runOnScroll() {
    console.log(window.scrollX, window.scrollY);
};

document.addEventListener('click', function(event) {
    const clickedElement = event.target;

    console.log('You clicked on:', clickedElement);
    console.log('Tag:', clickedElement.tagName);
    console.log('Classes:', clickedElement.className);
    console.log('ID:', clickedElement.id);
});


window.addEventListener(
    "scroll",
    () => runOnScroll(),
    { passive: true }
);
