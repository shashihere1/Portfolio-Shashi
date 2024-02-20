const sectionBtns = document.querySelectorAll('.section-btn');
const sectionContents = document.querySelectorAll('.section-content');

sectionBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (sectionContents[i].style.display === 'none') {
      sectionContents.forEach((content) => {
        content.style.display = 'none';
      });
      sectionContents[i].style.display = 'block';
    } else {
      sectionContents[i].style.display = 'none';
    }
  });
});

const resumeButton = document.getElementById("resumeButton");

resumeButton.addEventListener("click", function() {
    window.location.href = "https://www.resumeviking.com/templates/";
});