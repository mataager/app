const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white/15", "backdrop-blur-lg");
    } else {
      navbar.classList.remove("bg-white/15", "backdrop-blur-lg");
    }
  }

  window.addEventListener("scroll", handleScroll);
});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
});

function Tosigning() {
  const sidePanel = document.getElementById("signing");
  // Remove the hidden class and add the active class
  sidePanel.classList.remove("-translate-x-full");
  sidePanel.classList.add("translate-x-0");
}

const faqs = [
  {
    question: "Do I need coding or design experience to use PrebuiltUI?",
    answer:
      "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them.",
  },
  {
    question:
      "What is PrebuiltUI and how does it help developers and designers?",
    answer:
      "PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers.",
  },
  {
    question: "Can I use PrebuiltUI components in my existing project?",
    answer:
      "Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.",
  },
  {
    question: "How customizable are the generated components?",
    answer:
      "Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.",
  },
  {
    question: "Does PrebuiltUI support team collaboration?",
    answer:
      "There's no clear documentation on built-in collaboration features. Check their support for team options.",
  },
  {
    question: "Can I try PrebuiltUI before purchasing a plan?",
    answer: "Yes, you can try PrebuiltUI with full access to features.",
  },
];

const container = document.getElementById("faq-container");

container.innerHTML = faqs
  .map(
    (item, index) => `
    <div class="faq-item flex flex-col glass rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <h3 
            class="faq-header flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium"
            data-index="${index}"
        >
            ${item.question}
            <svg class="chevron size-5 transition-all shrink-0 duration-400"
                fill="none" stroke="currentColor" stroke-width="2" 
                viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
            </svg>
        </h3>
        <p class="faq-content px-4 text-sm/6 transition-all duration-400 overflow-hidden max-h-0">
            ${item.answer}
        </p>
    </div>
`,
  )
  .join("");

let openIndex = null;

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const index = header.getAttribute("data-index");
    const content = header.nextElementSibling;
    const icon = header.querySelector(".chevron");

    if (openIndex === index) {
      content.classList.remove("pt-2", "pb-4", "max-h-80");
      content.classList.add("max-h-0");
      icon.classList.remove("rotate-180");
      openIndex = null;
    } else {
      document.querySelectorAll(".faq-content").forEach((c) => {
        c.classList.remove("pt-2", "pb-4", "max-h-80");
        c.classList.add("max-h-0");
      });
      document
        .querySelectorAll(".chevron")
        .forEach((i) => i.classList.remove("rotate-180"));

      content.classList.remove("max-h-0");
      content.classList.add("pt-2", "pb-4", "max-h-80");
      icon.classList.add("rotate-180");
      openIndex = index;
    }
  });
});

// Initialize AOS
AOS.init({
  disable: "mobile", // This will disable AOS on devices with a width of 768px or less
  offset: 50, // smaller offset for small screens
  duration: 400, // shorter durations feel "snappier" on mobile
  once: true, // only animate once to save resources
  disableMutationObserver: false,
});

function submitForm() {
  // 1. Double check validation before logging
  if (!this.isValid()) {
    alert("Please fill all fields correctly.");
    return;
  }

  // 2. Collect and Clean Data
  const signedUpData = {
    event: this.mode === "signup" ? "NEW_USER_REGISTRATION" : "USER_LOGIN",
    timestamp: new Date().toLocaleString(),
    user: {
      firstName: this.firstName.substring(0, 150),
      lastName: this.lastName.substring(0, 150),
      email: this.email.toLowerCase().trim(), // Ensure email is clean
      // Password is kept at 150 chars max for server safety
      password: this.password.substring(0, 150),
    },
    business: {
      name: this.bName.substring(0, 150),
      personalPhone: this.pPhone,
      businessPhone: this.bPhone,
    },
  };

  // 3. Log the data
  console.log("--- DATA COLLECTION SUCCESSFUL ---");
  console.table(signedUpData.user); // Beautiful table in console
  console.log("Full Payload:", signedUpData);

  alert("Success! Check the console (F12) to see your collected data.");
}
