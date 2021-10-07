// ES6 (2015)
// Modern javascript features
// Classes
// Spread operators
// Arrow functions
// String templating


class Component {
  constructor(firstname, lastname, standard, contactNumber, university) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.standard = standard;
    this.contactNumber = contactNumber;
    this.university = university;
    this.password = process.env.GmailPassword;
  }

  setState() {
    
  }
  getFirstname() {
    return this.setState();
  }
  getLastname() {
    return this.lastname;
  }
  sendEmail() {
    return `Dear ${this.firstname},\nWelcome to Blah Blah.`;
  }
  giveMeAllInfo() {
    return;
  }
}

const student1 = new student('johnson');
