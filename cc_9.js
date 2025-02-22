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

// Task 2: Creating a Manager Class 
// created a manager class that is inheritted from the employee class 
class Manager extends Employee{
    constructor(name, id, department, salary, teamSize){
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails(){
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, 
        Salary: $${this.salary}, Team Size: ${this.teamSize}`; // formatted string of employee details with team sizes 
    }
    calculateBonus(){
        return this.calculateAnnualSalary() * 0.10; // calculates 10% of the managers annual salary 
    }
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); // Expected output: 9600