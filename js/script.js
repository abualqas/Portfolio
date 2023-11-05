// Get references to the necessary elements
const hamburgerButton = document.querySelector('[data-te-collapse-init]');
const collapsibleContainer = document.querySelector('[data-te-collapse-item]');

// Add an event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
  // Toggle the 'hidden' class on the collapsible container
  collapsibleContainer.classList.toggle('hidden');
});

// Optionally, you can also close the collapsible container when a navigation link is clicked
const navLinks = document.querySelectorAll('[data-te-nav-link-ref]');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    collapsibleContainer.classList.add('hidden');
  });
});
