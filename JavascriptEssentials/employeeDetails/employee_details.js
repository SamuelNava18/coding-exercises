const employees = [
    { id: 1, name: 'Juan Pérez', department: 'IT', salary: 2500, specialization: 'Javascript' },
    { id: 2, name: 'María López', department: 'Finanzas', salary: 3000, specialization: 'Python' },
    { id: 3, name: 'Pedro Gómez', department: 'RRHH', salary: 2800, specialization: 'Java' },
    { id: 4, name: 'Ana Rodríguez', department: 'Marketing', salary: 2700, specialization: 'C++' },
    { id: 5, name: 'Carlos Sánchez', department: 'Finanzas', salary: 3200, specialization: 'C#' }
];
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees;

}
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries ${totalSalaries}`);
}
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'RRHH');
    const hrEmployeesDisplay = hrEmployees
        .map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('');
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }
}
function findBySpecialization(specialization) {
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con esta especialización';
    }
}