function toggleMenu() {
  const navbarLinks = document.getElementById("navbarLinks");
  navbarLinks.classList.toggle("active");
}
function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  alert(`Language changed to: ${selectedLanguage}`);
  // can add your logic to change the language of your content
}


function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
  });
}
function scrollToBottom() {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
}