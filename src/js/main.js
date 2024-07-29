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
	document.getElementById('formStudent').reset();
	console.log(students[students.length - 1]);
}