document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('#skills li');
  const skillDescription = document.getElementById('skill-description');

  skills.forEach(skill => {
      skill.addEventListener('click', function () {
          skillDescription.textContent = this.getAttribute('data-description');
          skillDescription.classList.remove('hidden');
      });
  });
});
