const students = [];

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

	students.push(student);

	addNewRow(student);

	document.getElementById('formStudent').reset();

	console.log(students[students.length - 1]);
};

function addNewRow (student) {
	const table = document.getElementById('tableStudent');
	const newRow = table.insertRow();

	const idNode = document.createTextNode(student.id);
	const nameNode = document.createTextNode(student.name);
	const emailNode = document.createTextNode(student.email);
	const phoneNode = document.createTextNode(student.phone);
	const courseNode = document.createTextNode(courses[student.course]);
	const shiftNode = document.createTextNode(shifts[student.shift]);

	newRow.insertCell().appendChild(idNode);
	newRow.insertCell().appendChild(nameNode);
	newRow.insertCell().appendChild(emailNode);
	newRow.insertCell().appendChild(phoneNode);
	newRow.insertCell().appendChild(courseNode);
	newRow.insertCell().appendChild(shiftNode);
};