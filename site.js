document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
            dropdownMenu.classList.remove('open');
        }
    });
});
