interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "San Francisco"
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "New York"
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const headerRow: HTMLTableRowElement = thead.insertRow();
const header1: HTMLTableCellElement = headerRow.insertCell(0);
const header2: HTMLTableCellElement = headerRow.insertCell(1);
header1.innerHTML = "First Name";
header2.innerHTML = "Location";

table.appendChild(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell(0);
  const locationCell: HTMLTableCellElement = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

table.appendChild(tbody);
body.appendChild(table);
