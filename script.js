document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuList = document.getElementById('menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var menuList = document.getElementById('menu-list');
        
        // Collapse menu only if screen width is less than 768px (mobile view)
        if (window.innerWidth < 768) {
            menuList.style.display = 'none';
        }
        
        var targetSection = document.querySelector(this.getAttribute('href'));
        var offsetPosition = targetSection.offsetTop - 60; // Adjust 60px as needed based on your header height
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.getElementById('feedback-button').addEventListener('click', function() {
    window.location.href = 'feedback.html'; // Replace with the actual feedback page URL
});
