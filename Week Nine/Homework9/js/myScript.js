// Set up the object
var person = {
    firstName: 'Bill',
    lastName: 'Burbatt',
    birthday: new Date("12/18/1993"),
    getAgeInYears: function () {
        return (new Date() - this.birthday); // Need "this" because inside function
    }
};

// Update the HTML
var fName = document.getElementById('firstName'); // Get element
fName.textContent = person.firstName;
var lName = document.getElementById('lastName'); // Get element
lName.textContent = person.lastName;
var bday = document.getElementById('birthDate'); // Get element
bday.textContent = person.birthday;
