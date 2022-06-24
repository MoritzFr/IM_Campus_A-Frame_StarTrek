var spheres = document.querySelectorAll('a-sphere');

spheres.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.setAttribute('color', 'white');
        item.firstElementChild.setAttribute('opacity', 1);
    })
})

spheres.forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.setAttribute('color', 'red');
        item.firstElementChild.setAttribute('opacity', 0);
    })
})