// theme toggling
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // 1. Initial Load: Check for saved preference
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
    htmlElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
  } else {
    htmlElement.removeAttribute("data-theme");
    themeToggle.checked = false;
  }

  // 2. Toggle Event: Listen for changes
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // Make body visible (prevents flash of unstyled content)
  document.body.style.opacity = "1";
});
//

function toggleMenu(button) {
  // Find the specific result div next to this button
  const menu = button.nextElementSibling;

  // Close any other open menus first (optional)
  document.querySelectorAll(".opendetbtnresult").forEach((item) => {
    if (item !== menu) item.classList.remove("show");
  });

  // Toggle the "show" class on the clicked menu
  menu.classList.toggle("show");
}

// Function to handle the actual actions
function handleAction(actionName) {
  console.log("Action triggered: " + actionName);
  alert("You clicked: " + actionName);
  // Add your logic here (e.g., triggering a download or a delete request)
}

// Close menus if user clicks outside
window.onclick = function (event) {
  if (
    !event.target.matches(".opendetbtn") &&
    !event.target.matches(".bi-three-dots")
  ) {
    document.querySelectorAll(".opendetbtnresult").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
};
