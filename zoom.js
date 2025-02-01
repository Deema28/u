document.querySelectorAll('.map').forEach(map => {
    map.addEventListener('click', () => {
        if (map.style.transform === 'scale(2)') {
            map.style.transform = 'scale(1)';
            map.style.cursor = 'zoom-in';
        } else {
            map.style.transform = 'scale(2)';
            map.style.cursor = 'zoom-out';
        }
    });
});