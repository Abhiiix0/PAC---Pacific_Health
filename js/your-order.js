const data = [
  {
    order: 4,
    date: "2024-12-04",
    amount: "$250",
    status: "Pending",
    activity: [
      `24/11/15 07:36AM Account charged $707.50`,
      `24/11/15 07:55AM Order submitted`,
    ],
    task: "Task 4",
  },
  {
    order: 5,
    date: "2024-12-05",
    amount: "$300",
    status: "Completed",
    activity: "Activity 5",
    task: "Task 5",
  },
  {
    order: 6,
    date: "2024-12-06",
    amount: "$350",
    status: "Pending",
    activity: [
      `24/11/15 07:36AM Account charged $707.50`,
      `24/11/15 07:55AM Order submitted`,
    ],
    task: "Task 6",
  },
  {
    order: 7,
    date: "2024-12-07",
    amount: "$400",
    status: "Completed",
    activity: [
      `24/11/15 07:36AM Account charged $707.50`,
      `24/11/15 07:55AM Order submitted`,
    ],
    task: "Task 7",
  },
  {
    order: 8,
    date: "2024-12-08",
    amount: "$450",
    status: "Pending",
    activity: "Activity 8",
    task: "Task 8",
  },
  {
    order: 9,
    date: "2024-12-09",
    amount: "$500",
    status: "Completed",
    activity: "Activity 9",
    task: "Task 9",
  },
  {
    order: 10,
    date: "2024-12-10",
    amount: "$550",
    status: "Pending",
    activity: "Activity 10",
    task: "Task 10",
  },
  {
    order: 11,
    date: "2024-12-11",
    amount: "$600",
    status: "Completed",
    activity: "Activity 11",
    task: "Task 11",
  },
  {
    order: 12,
    date: "2024-12-12",
    amount: "$650",
    status: "Pending",
    activity: "Activity 12",
    task: "Task 12",
  },
  {
    order: 13,
    date: "2024-12-13",
    amount: "$700",
    status: "Completed",
    activity: "Activity 13",
    task: "Task 13",
  },
  {
    order: 14,
    date: "2024-12-14",
    amount: "$750",
    status: "Pending",
    activity: [
      `24/11/15 07:36AM Account charged $707.50`,
      `24/11/15 07:55AM Order submitted`,
    ],
    task: "Task 14",
  },
  {
    order: 15,
    date: "2024-12-15",
    amount: "$800",
    status: "Completed",
    activity: "Activity 15",
    // task: "Task 15",
  },
  {
    order: 16,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 17,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 18,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 19,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 20,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 21,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
  {
    order: 22,
    date: "2024-12-16",
    amount: "$850",
    status: "Pending",
    activity: "Activity 16",
  },
];

let currentPage = 1;
const rowsPerPage = 12;

function renderTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = currentPage * rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.order}</td>
        <td>${item.product}</td>
        <td>${item.amount}</td>
        <td>${item.status}</td>
        <td>
          <p>${
            Array.isArray(item.activity) ? item.activity[0] : item.activity
          }</p>
          <p>${
            Array.isArray(item.activity) && item.activity[1]
              ? item.activity[1]
              : ""
          }</p>
        </td>
        <td>
          <a href="/order.html">View Order</a>
        </td>
        `;
    tableBody.appendChild(row);
  });

  renderPagination();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPagination() {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const pageNumbers = document.getElementById("page-numbers");
  pageNumbers.innerHTML = "";

  const createPageNumber = (page) => {
    const pageNumber = document.createElement("span");
    pageNumber.textContent = page;
    pageNumber.style.cursor = "pointer";
    pageNumber.style.margin = "0 5px";
    pageNumber.style.padding = "8px 15px";
    pageNumber.style.borderRadius = "5px";

    if (page === currentPage) {
      pageNumber.style.backgroundColor = "#CED4D4";
      pageNumber.style.color = "#fff";
    }

    pageNumber.onclick = () => {
      currentPage = page;
      renderTable();
    };
    return pageNumber;
  };

  if (totalPages <= 5) {
    // Show all numbers if total pages <= 5
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.appendChild(createPageNumber(i));
    }
  } else {
    // Always show the first page
    pageNumbers.appendChild(createPageNumber(1));

    if (currentPage > 3) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pageNumbers.appendChild(dots);
    }

    // Show middle pages dynamically
    let startPage, endPage;

    if (currentPage === 1) {
      startPage = 2;
      endPage = 3;
    } else if (currentPage === totalPages) {
      startPage = totalPages - 2;
      endPage = totalPages - 1;
    } else {
      startPage = Math.max(2, currentPage - 1);
      endPage = Math.min(totalPages - 1, currentPage + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.appendChild(createPageNumber(i));
    }

    if (currentPage < totalPages - 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pageNumbers.appendChild(dots);
    }

    // Always show the last page
    pageNumbers.appendChild(createPageNumber(totalPages));
  }

  // Add Prev & Next buttons
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changePage(direction) {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  if (direction === -1 && currentPage > 1) {
    currentPage--;
  } else if (direction === 1 && currentPage < totalPages) {
    currentPage++;
  }
  renderTable();
  scrollToTop();
}

renderTable();
