$("#inputPhone").mask("(99) 99999-9999");

const students = [
	{
		id: 1,
		name: "rafael",
		email: "rafael@email.com",
		phone: "(99) 99999-9999",
		course: 1,
		shift: 0,
	}
];

const shifts = [
	'Diurno',
	'Vespertino',
	'Noturno',
];

const courses = [
	'Java',
	'.NET',
	'Javascript',
];

function save () {
	const student = {
		id: students.length + 1,
		name: document.getElementById('inputName').value,
		email: document.getElementById('inputEmail').value,
		phone: document.getElementById('inputPhone').value,
		course: parseInt(document.getElementById('selectCourses').value),
		shift: parseInt(document.querySelector('input[name="flexRadioShift"]:checked').value),
	}

	const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneValidator = /^\(\d{2}\) \d{4,5}-\d{4}$/;

	if (!emailValidator.test(student.email)) {
		document.getElementById('inputEmail').value = '';
		return alert('email inválido!');
	}

	if (!phoneValidator.test(student.phone)) {
		document.getElementById('inputPhone').value = '';
		return alert('telefone inválido')
	}

	students.push(student);

	addNewRow(student);

	document.getElementById('formStudent').reset();

	console.log(students[students.length - 1]);
};

function addNewRow (student) {
  const table = document.getElementById('tableStudent');
  const newRow = table.insertRow();

  const idCell = newRow.insertCell();
  idCell.appendChild(document.createTextNode(student.id));

  const nameCell = newRow.insertCell();
  nameCell.appendChild(document.createTextNode(student.name));

  const emailCell = newRow.insertCell();
  emailCell.appendChild(document.createTextNode(student.email));
  emailCell.classList.add('d-none', 'd-sm-table-cell');

  const phoneCell = newRow.insertCell();
  phoneCell.appendChild(document.createTextNode(student.phone));
  phoneCell.classList.add('d-none', 'd-sm-table-cell');

  const courseCell = newRow.insertCell();
  courseCell.appendChild(document.createTextNode(courses[student.course]));
  courseCell.classList.add('d-none', 'd-sm-table-cell');

  const shiftCell = newRow.insertCell();
  shiftCell.appendChild(document.createTextNode(shifts[student.shift]));
  shiftCell.classList.add('d-none', 'd-sm-table-cell');
};

(function () {
	for (let student of students) {
		addNewRow(student);
	};
} ());