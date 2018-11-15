// Set up the object
var person = {
    firstName: 'Bill',
    lastName: 'Burbatt',
    birthday: new Date("2/18/1993"),
    getAgeInYears: function () {
        return (2018 - this.birthday.getFullYear()); // Need "this" because inside function
    }
};
var person2 = {
    firstName: 'Blake',
    lastName: 'Bortles',
    birthday: new Date("1/1/1992"),
    getAgeInYears: function () {
        return (2018 - this.birthday.getFullYear()); // Need "this" because inside function
    }
};

// Update the HTML
var fName = document.getElementById('firstName'); // Get element
fName.textContent = person.firstName;
var lName = document.getElementById('lastName'); // Get element
lName.textContent = person.lastName;
var bday = document.getElementById('birthDate'); // Get element
bday.textContent = person.getAgeInYears();


var fName2 = document.getElementById('firstName2'); // Get element
fName2.textContent = person2.firstName;
var lName2 = document.getElementById('lastName2'); // Get element
lName2.textContent = person2.lastName;
var bday2 = document.getElementById('birthDate2'); // Get element
bday2.textContent = person2.getAgeInYears();

var age1 = person2.getAgeInYears();
var age2 = person.getAgeInYears();


var diff = document.getElementById('ageDiff'); // Get element
diff.textContent = Math.abs(age1 - age2);