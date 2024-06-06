document.getElementById('toggle-size').addEventListener('click', function() {
    const block = document.getElementById('center-block');
    if (block.classList.contains('pc-size')) {
        block.classList.remove('pc-size');
        block.classList.add('mobile-size');
    } else {
        block.classList.remove('mobile-size');
        block.classList.add('pc-size');
    }
});
