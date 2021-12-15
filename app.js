function Person (name, lastName, dob){
  this.name = name;
  this.lastName = lastName;
  this.birthday = new Date (dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date (diff);

  //   return Math.abs(ageDate.getUTCFullYear() - 2022);
  // }
}

Person.prototype.calculateAge = this.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date (diff);

  return Math.abs(ageDate.getUTCFullYear() - 2022);
}

//get full name using prototype

Person.prototype.getFullName = function(){
  return `${this.name} ${this.lastName}`;
}

// mary gets married using prototype

Person.prototype.getMarried = function(newName){
  this.name = newName;
}


const brad = new Person('brad', 'maouchi', '02-02-1994');
const mary = new Person('mary','janson', '02-03-1335');
mary.getMarried('smith');
console.log(mary.getFullName());









// how to inherite a prototype from 2 diffirent constractors 

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());