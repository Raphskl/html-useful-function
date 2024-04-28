var toggles = document.querySelectorAll('.toggle');
var h3Elements = document.querySelectorAll('h3');

toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
            // Afficher tous les éléments h3
            h3Elements.forEach(function(h3) {
                h3.style.display = 'block';
            });
        } else {
            content.style.display = 'none';
        }
    });
    toggle.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    toggle.addEventListener('mouseleave', function() {
        this.style.cursor = 'auto';
    });
});
