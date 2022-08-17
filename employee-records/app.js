//You are to create a collection of employee's information for your company. Each employee has the following attributes:
//1. Name
//2. Job title
//3. Salary
//4. Status
//First, you will create an empty array named `employees`

var employees = []

//Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

function employee (name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Full Time"
}

//This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

//(e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

employee.prototype.printEmployeeForm = function() {
    console.log(
        "Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary
    )
}

//You will then:
//1. Instantiate three employees
//2. Override the status attribute of one of them to either "Part Time" or "Contract"

var danny = new employee("Danny", "CEO", 80000, "")
console.log(danny)
var nicole = new employee("Nicole", "SSM", 100000, "Part Time")
console.log(nicole)
var brianna = new employee("Brianna", "CFO", 70000, "")
console.log(brianna)

//3. Call the `printEmployeeForm` method for each employee

danny.printEmployeeForm()
nicole.printEmployeeForm()
brianna.printEmployeeForm()
//4. Put the generated employees into the `employees` array using whichever method you prefer.
employees.push(danny)
employees.push(nicole)
employees.push(brianna)

console.log(employees)