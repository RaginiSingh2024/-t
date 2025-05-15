const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const sectionTabs = document.querySelectorAll('.section-tab');
const sections = document.querySelectorAll('.content-section');

// Section switching
sectionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and sections
    sectionTabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding section
    tab.classList.add('active');
    const sectionId = `${tab.getAttribute('data-section')}-section`;
    document.getElementById(sectionId).classList.add('active');
  });
});

// Category filtering for both sections
document.querySelectorAll('.category-buttons').forEach(buttonGroup => {
  const categoryButtons = buttonGroup.querySelectorAll('.category-btn');
  const galleryItems = buttonGroup.nextElementSibling.querySelectorAll('.gallery-item');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons in this group
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const category = button.getAttribute('data-category');
      
      // Show/hide gallery items based on category
      galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// Lightbox functionality (only for images)
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
