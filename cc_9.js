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
    };
    getDetails(){
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, 
        Salary: $${this.salary}, Team Size: ${this.teamSize}`; // formatted string of employee details with team sizes 
    };
    calculateBonus(){
        return super.calculateAnnualSalary() * 0.10; // calculates 10% of the managers annual salary 
    };
    calculateAnnualSalary(){
        return super.calculateAnnualSalary() + this.calculateBonus(); // calculates total annual salary 
    };
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); // Expected output: 9600

// Task 3: Creating a Company Class
// created a company class 
class Company {
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { 
        this.employees.push(employee); // added employee to array 
    }
    listEmployees() { 
        this.employees.forEach(employee => {console.log(employee.getDetails()) // logs employee details 

        });
    }
    // Task 4: Implementing a Payroll System 
    calculateTotalPayroll(){ // calculates the total payroll 
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(),0);
    }
}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Logged Task 4 
console.log(company.calculateTotalPayroll()); 

