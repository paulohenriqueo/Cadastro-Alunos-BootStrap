//masks
 $("#phone").mask("(99) 9999-99999");

var students = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro.antonio@gmail.com",
        phone: "9999999999",
        course: 4,
        shift: "Tarde",
    },
    {
        id: 2,
        name: "Glauco",
        email: "teste@teste.com",
        phone: "1111111111",
        course: 1,
        shift: "Manhã",
    }
];

var courses = [

    { id: 1, name: "Java" },
    { id: 2, name: "Phyton" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Angular"},

];

//onLoad
loadStudents();

//load new row
function loadStudents() {
    for(let student of students){
        addNewRow(student);
    }
}

//format phone number
function formatPhone(phone) {
    phone = phone.replace(/\D/g, '');

    if (phone.length === 11) {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (phone.length === 10) {
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
        return phone;
    }
}

//save student
function save() {

    var student = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("phone").value,
        course: parseInt(document.getElementById("selectCourse").value),
        shift: document.querySelector('input[name="shift"]:checked').value,
    };

    addNewRow(student);
    students.push(student);

    document.getElementById("formStudent").reset();

}

//add new row
function addNewRow(student){

    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    //insert student id
    var idNode = document.createTextNode(student.id);
    newRow.insertCell().appendChild(idNode);

    //insert student name
    var nameNode = document.createTextNode(student.name);
    newRow.insertCell().appendChild(nameNode);

    //insert student email
    var emailNode = document.createTextNode(student.email);
    
    var cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(emailNode);

    //insert student phone
    var formattedPhone = formatPhone(student.phone);
    var phoneNode = document.createTextNode(formattedPhone);
    
    var cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(phoneNode);

    //insert student course
    var course = courses.find(c => c.id === student.course);
    newRow.insertCell().appendChild(document.createTextNode(course ? course.name : "Desconhecido"));

    //insert student shift
    var shift = '';
    if(student.shift === 'Manhã') {
        shift = 'manhã';
    }
    if(student.shift === 'Tarde') {
        shift = 'tarde';
    }
    if(student.shift === 'Noite') {
        shift = 'noite';
    }

    newRow.insertCell().appendChild(document.createTextNode(student.shift));

}