

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Toggle a class to indicate the active item
            navItems.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');

            // Implement functionality for each menu item (you can customize this)
            const itemName = item.textContent;
            handleMenuItemClick(itemName);
        });
    });

    // Implement functionality for each menu item (you can customize this)
    function handleMenuItemClick(itemName) {
        // Example: Display a message when a menu item is clicked
        alert(`Clicked on ${itemName}!`);
    }
    
});


