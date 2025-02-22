// Task 1: Creating a Employee Class 
// created a class called employee with different constructors 
class Employee { 
    constructor(name, id, department, salary) { 
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails(){ // formatted string of employee details 
        return `Employee: ${this.name}, ID: ${this.id}, 
        Department: ${this.department}, Salary: $${this.salary}`;
    };
    calculateAnnualSalary(){
        return this.salary * 12; // calculates the employees annual salary 
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //creating a new employee
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000