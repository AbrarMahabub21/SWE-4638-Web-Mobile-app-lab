"use strict";

class TaskManager {
  constructor(tasksInfo, id, callback) {
    this.id = id;
    this.callback = callback;
    this.tasks = tasksInfo;
    this.currentDate = new Date();
  }

  render(date) {
    const container = document.getElementById(this.id);
    container.innerHTML = "";

    // Create the table element
    const table = document.createElement("table");
    table.classList.add("task-manager-table");

    // Create table header row for week names and dates
    const headerRow = document.createElement("tr");

    // Week column
    const weekHeader = document.createElement("th");
    weekHeader.textContent = "";
    headerRow.appendChild(weekHeader);

    // Date columns
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay()); // Start from the first day of the week

    for (let i = 0; i < 7; i++) {
      const th = document.createElement("th");
      th.textContent = currentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      headerRow.appendChild(th);
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    table.appendChild(headerRow);

    // Create table body
    const body = document.createElement("tbody");

    // Iterate over each row (week)
    for (let i = 0; i < 7; i++) {
      const row = document.createElement("tr");

      // Week day column
      const weekDayCell = document.createElement("td");
      weekDayCell.textContent = daysOfWeek[i];
      row.appendChild(weekDayCell);

      // Iterate over each column (day)
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        // Calculate the date for the current cell
        const cellDate = new Date(date);
        cellDate.setDate(cellDate.getDate() - cellDate.getDay() + i + j);

        // Filter tasks for the current cell's date
        const filteredTasks = this.tasks.filter((task) => {
          const taskDate = new Date(task.dueDate);
          return taskDate.toDateString() === cellDate.toDateString();
        });

        // Create a list of tasks for the current cell
        const ul = document.createElement("ul");
        filteredTasks.forEach((task) => {
          const li = document.createElement("li");
          li.textContent = `${task.name} - Priority: ${task.priority}`;
          li.addEventListener("click", () => {
            this.handleTaskClick(task);
          });
          ul.appendChild(li);
        });

        // Append the tasks list to the cell
        cell.appendChild(ul);

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table body
      body.appendChild(row);
    }

    // Append the table body to the table
    table.appendChild(body);

    // Append the table to the container
    container.appendChild(table);
    const prevButton = document.createElement("button");
    prevButton.textContent = "< Prev";
    prevButton.addEventListener("click", () => {
      this.handlePrevButtonClick();
    });
    container.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next >";
    nextButton.addEventListener("click", () => {
      this.handleNextButtonClick();
    });
    container.appendChild(nextButton);
  }

  handleTaskClick(task) {
    console.log(
      "Task Info:",
      task.name + " / " + task.dueDate + " / " + task.priority
    );
  }

  handlePrevButtonClick() {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.render(this.currentDate);
  }

  handleNextButtonClick() {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.render(this.currentDate);
  }
}
