//Q1

function createProduct(name, price , category){
    return{
        name: name,
        price: price,
        category: category,
        getDetails: function() {
            return `Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
        }
    }
}

const product1 = createProduct("Laptop", 1200, "Electronics");
const product2 = createProduct("Shoes", 80, "Fashion");
console.log(product1.getDetails());
console.log(product2.getDetails());

//Q2
function createReportCard(name,grade,subject){
    return {
        name: name,
        grade: grade,
        subject: subject,
        getReport: function() {
            return `Student Name: ${this.name}, Grade: ${this.grade}, Subject: ${this.subject}`;
        }
    }
}

const student1= createReportCard("ved santoki", "A", "Math");
const student2 = createReportCard("henil santoki", "B", "Science");
console.log(student1.getReport());
console.log(student2.getReport());

//Q3

function createCar(model, rentalRate, availability) {
    return {
      model: model,
      rentalRate: rentalRate, 
      availability: availability, 
  
      displayCarInfo: function() {
        return `Model: ${this.model}, Rate: ₹${this.rentalRate}/day, Available: ${this.availability ? "Yes" : "No"}`;
      },
  
      rentCar: function() {
        if (this.availability) {
          this.availability = false;
          return `${this.model} has been rented.`;
        } else {
          return `${this.model} is currently not available.`;
        }
      },
  
      returnCar: function() {
        this.availability = true;
        return `${this.model} has been returned and is now available.`;
      }
    };
  }
  
  
  const car1 = createCar("Toyota Fortuner", 3500, true);
  const car2 = createCar("Hyundai i20", 1500, false);
  const car3 = createCar("Maruti Suzuki Swift", 1200, true);
  
  console.log(car1.displayCarInfo()); 
  console.log(car2.displayCarInfo()); 
  
  console.log(car1.rentCar());        
  console.log(car1.displayCarInfo()); 
  
  console.log(car2.rentCar());        
  console.log(car1.returnCar());     
  
  //q4
function createBook(title,author,ISBN,availableCopies){
    return{
        title: title,
        author: author,
        ISBN: ISBN,
        availableCopies: availableCopies,
        getBookInfo: function() {
            return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Available Copies: ${this.availableCopies}`;
        },
        borrowBook: function() {
            if (this.availableCopies > 0) {
                this.availableCopies--;
                return `You have borrowed "${this.title}".`;
            } else {
                return `Sorry, "${this.title}" is not available for borrowing.`;
            }
        },
        returnBook: function() {
            this.availableCopies++;
            return `You have returned "${this.title}".`;
        }

    }

}

 let book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 5);
    let book2 = createBook("To Kill a Mockingbird", "Harper Lee", "9780061120084", 3);
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
console.log(book1.borrowBook());
console.log(book1.getBookInfo());
console.log(book2.borrowBook());
console.log(book2.getBookInfo());
console.log(book1.returnBook());
console.log(book1.getBookInfo());
console.log(book2.returnBook());
console.log(book2.getBookInfo());
 
//Q5

function createEmployeeBadges(name, position, id, department) {
    return {
        name: name,
        position: position,
        id: id,
        department: department,
        getBadgeInfo: function() {
            return `Employee Name: ${this.name}, Position: ${this.position}, ID: ${this.id}, Department: ${this.department}`;
        }
    }
}
const employee1 = createEmployeeBadges("John Doe", "Software Engineer", "E123", "IT");
const employee2 = createEmployeeBadges("Jane Smith", "Project Manager", "E456", "Operations");
console.log(employee1.getBadgeInfo());
console.log(employee2.getBadgeInfo());

//Q6
function  roomReservation(roomNumber, type, price, isAvailable){
  this.roomNumber = roomNumber;
  this.type = type;
  this.price = price;
  this.isAvailable = isAvailable;

  this.bookRoom = function() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `Room ${this.roomNumber} has been booked.`;
    } else {
      return `Room ${this.roomNumber} is not available for booking.`;
    }
  }
  this.checkAvailability = function() {
    return this.isAvailable ? `Room ${this.roomNumber} is available.` : `Room ${this.roomNumber} is not available.`;
  }

}
const room1 = new roomReservation(101, "Deluxe", 5000, true);
const room2 = new roomReservation(102, "Standard", 3000, false);
console.log(room1.checkAvailability());
console.log(room1.bookRoom());
console.log(room1.checkAvailability());

console.log(room2.checkAvailability());
console.log(room2.bookRoom());
console.log(room2.checkAvailability());

//Q7

function Course(title, instructor, duration, studentEnrolled) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentEnrolled = studentEnrolled;

    this.getCourseInfo = function() {
        return `Course Title: ${this.title}, Instructor: ${this.instructor}, Duration: ${this.duration} hours, Students Enrolled: ${this.studentEnrolled}`;
    }

    this.enrollStudent = function() {
        this.studentEnrolled++;
        return `A new student has been enrolled in ${this.title}. Total students enrolled: ${this.studentEnrolled}`;
    }
}
const course1 = new Course("JavaScript Basics", "John Doe", 30, 50);
const course2 = new Course("Python for Data Science", "Jane Smith", 40, 30);
console.log(course1.getCourseInfo());
console.log(course2.getCourseInfo());
console.log(course1.enrollStudent());
console.log(course1.getCourseInfo());
console.log(course2.enrollStudent());
console.log(course2.getCourseInfo());

//Q8

function Wallet(ownerName, balance, currency){
   this.ownerName = ownerName;
   this.balance = balance;
   this.currency = currency;

   this.addmoney = function(amount){
    if (amount > 0){
      this.balance += amount;
      console.log(`${amount} ${this.currency} added to ${this.ownerName}'s wallet. New balance: ${this.balance} ${this.currency}`);
    }else{
      console.log()
    }
    }
   }

