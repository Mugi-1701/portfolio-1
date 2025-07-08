var typed = new Typed(".auto-type", {
    strings: ["web"],
    typeSpeed: 200,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});
// Get elements
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");

// Add click event to all certificate images
document.querySelectorAll('.certimg').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Close the modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close if click outside the image
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
