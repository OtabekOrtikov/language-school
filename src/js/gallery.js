// Sample JSON Data
const teachers = [
  {
    name: "Christian Howard",
    subject: "Italian teacher",
    country: "Italy",
    flag: "🇮🇹",
    image: "./images/teacher1.jpg",
  },
  {
    name: "Sandra Wilson",
    subject: "Spanish teacher",
    country: "Spain",
    flag: "🇪🇸",
    image: "./images/teacher2.jpg",
  },
  {
    name: "Jimmy Cooper",
    subject: "English teacher",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "./images/teacher3.jpg",
  },
  {
    name: "Maria Rossi",
    subject: "French teacher",
    country: "France",
    flag: "🇫🇷",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Liam Chen",
    subject: "Chinese teacher",
    country: "China",
    flag: "🇨🇳",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Anna Gonzalez",
    subject: "Portuguese teacher",
    country: "Portugal",
    flag: "🇵🇹",
    image: "https://via.placeholder.com/300",
  },
];

let currentPage = 1;
const itemsPerPage = 3;

const galleryContent = document.getElementById("galleryContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function displayTeachers(page) {
  // Calculate start and end indexes
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get teachers for the current page
  const teachersToDisplay = teachers.slice(startIndex, endIndex);

  // Clear current content
  galleryContent.innerHTML = "";

  // Generate HTML for each teacher
  teachersToDisplay.forEach((teacher) => {
    const teacherCard = document.createElement("div");
    teacherCard.className = "gallery__content--item";
    teacherCard.innerHTML = `
        <img src="${teacher.image}" alt="${teacher.name}">
        <h3>${teacher.name}</h3>
        <p><span class="gallery__flag">${teacher.flag}</span>${teacher.subject}</p>
      `;
    galleryContent.appendChild(teacherCard);
  });

  // Update button states
  prevBtn.disabled = page === 1;
  nextBtn.disabled = endIndex >= teachers.length;
}

// Pagination button event listeners
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayTeachers(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(teachers.length / itemsPerPage)) {
    currentPage++;
    displayTeachers(currentPage);
  }
});

// Initial load
displayTeachers(currentPage);
