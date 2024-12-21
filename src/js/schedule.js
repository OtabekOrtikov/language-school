const courses = [
  {
    course: "English",
    startDate: "01.01.2022",
    duration: "6 months",
    price: "$200",
  },
  {
    course: "German",
    startDate: "01.02.2022",
    duration: "6 months",
    price: "$200",
  },
  {
    course: "Russian",
    startDate: "01.03.2022",
    duration: "6 months",
    price: "$200",
  },
  {
    course: "Uzbek",
    startDate: "01.04.2022",
    duration: "6 months",
    price: "$200",
  },
];

const scheduleTable = document.getElementById("scheduleTable");

function populateScheduleTable(courses) {
  const tableHeading = `
      <tr class="schedule__content--table-heading">
        <th>Course</th>
        <th>Start Date</th>
        <th>Duration</th>
        <th>Price</th>
      </tr>`;
  scheduleTable.innerHTML = tableHeading;

  courses.forEach((course) => {
    const row = `
        <tr>
          <td>${course.course}</td>
          <td>${course.startDate}</td>
          <td>${course.duration}</td>
          <td>${course.price}</td>
        </tr>`;
    scheduleTable.innerHTML += row;
  });
}

populateScheduleTable(courses);
